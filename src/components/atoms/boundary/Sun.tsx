import { Box, useColorMode } from '@chakra-ui/react';
import { DarkModeBox } from 'components/atoms';
import React, { VFC } from 'react';

const circle = {
  bg: 'white',
  borderRadius: '50%',
  boxShadow: '0px 0px 1px 0px #508fb9',
  animation: 'ripple 15s infinite',
};

const Sun: VFC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const opacity = (num: number) => (isDark ? num - 0.1 : num);
  return (
    <DarkModeBox w="100%" h="100vh" bglight="cyan.100" bgdark="gray.800">
      <Box
        pos="absolute"
        w="200px"
        h="200px"
        left="-100px"
        top="-100px"
        opacity="0.9"
        {...circle}
      />
      <Box
        pos="absolute"
        w="400px"
        h="400px"
        left="-200px"
        top="-200px"
        opacity={opacity(0.4)}
        {...circle}
      />
      <Box
        pos="absolute"
        w="600px"
        h="600px"
        left="-300px"
        top="-300px"
        opacity={opacity(0.2)}
        {...circle}
      />
    </DarkModeBox>
  );
};

export default Sun;
