import { Box, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

const Border: FC = () => {
  const { colorMode } = useColorMode();
  const color1 = { light: '#FFFFFF', dark: '#292929' };
  const color2 = { light: '#CAD4E2', dark: '#1A212C' };
  return (
    <Box
      w="100%"
      h={2}
      boxShadow={`2px 2px 4px ${color1[colorMode]} inset, -2px -2px 4px ${color2[colorMode]} inset`}
    />
  );
};
export default Border;
