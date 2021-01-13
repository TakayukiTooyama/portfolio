import {
  chakra,
  ChakraProps,
  ComponentWithAs,
  forwardRef,
} from '@chakra-ui/react';
import { isValidMotionProp, motion, MotionProps } from 'framer-motion';

type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

const MotionBox = motion.custom(
  forwardRef<MotionBoxProps, 'div'>((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <chakra.div ref={ref} {...chakraProps} />;
  })
) as ComponentWithAs<'div', MotionBoxProps>;

export default MotionBox;
