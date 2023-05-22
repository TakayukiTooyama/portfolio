import {
  chakra,
  ChakraProps,
  ComponentWithAs,
  forwardRef,
  shouldForwardProp,
} from '@chakra-ui/react';
import { isValidMotionProp, motion, MotionProps } from 'framer-motion';
import { FC } from 'react';

type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };


  const MotionBox: FC<MotionBoxProps> = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default MotionBox;
