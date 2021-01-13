import { useColorMode } from '@chakra-ui/react';
import { DarkModeBox, MotionBox } from 'components/atoms';
import React, { VFC } from 'react';

const circle = {
  bg: 'white',
  borderRadius: '50%',
  boxShadow: '0px 0px 1px 0px #508fb9',
  transition: {
    duration: 10,
    times: [0, 0.5, 1],
    repeat: Infinity,
  },
};

const Sun: VFC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const opacity = (num: number) => (isDark ? num - 0.1 : num);
  return (
    <DarkModeBox w="100%" h="100vh" bglight="cyan.100" bgdark="gray.800">
      <MotionBox
        pos="absolute"
        w="200px"
        h="200px"
        left="-100px"
        top="-100px"
        opacity="0.9"
        animate={{ scale: [1.0, 1.2, 1.0] }}
        {...circle}
      />
      <MotionBox
        pos="absolute"
        w="400px"
        h="400px"
        left="-200px"
        top="-200px"
        opacity={opacity(0.4)}
        animate={{ scale: [1.0, 1.3, 1.0] }}
        {...circle}
      />
      <MotionBox
        pos="absolute"
        w="600px"
        h="600px"
        left="-300px"
        top="-300px"
        opacity={opacity(0.2)}
        animate={{ scale: [1.0, 1.4, 1.0] }}
        {...circle}
      />
    </DarkModeBox>
  );
};

export default Sun;
