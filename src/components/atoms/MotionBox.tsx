import {
  chakra,
  ChakraProps,
  ComponentWithAs,
  forwardRef,
  useColorMode,
} from '@chakra-ui/react';
import { isValidMotionProp, motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
    bglight?: string;
    bgdark?: string;
    colorlight?: string;
    colordark?: string;
    children?: ReactNode;
  };

const MotionBox = motion.custom(
  forwardRef<MotionBoxProps, 'div'>((props, ref) => {
    const {
      bglight = 'none',
      bgdark = 'none',
      colordark = 'white',
      colorlight = 'black',
      children,
    } = props;
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    const { colorMode } = useColorMode();
    const bgColor = { light: bglight, dark: bgdark };
    const color = { light: colorlight, dark: colordark };
    return (
      <chakra.div
        ref={ref}
        {...chakraProps}
        bg={bgColor[colorMode]}
        color={color[colorMode]}
      >
        {children}
      </chakra.div>
    );
  })
) as ComponentWithAs<'div', MotionBoxProps>;

export default MotionBox;
