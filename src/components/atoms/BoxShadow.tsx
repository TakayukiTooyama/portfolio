import { Box, BoxProps, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = BoxProps & {
  box?: string;
  align?: string;
};

const BoxShadow: FC<Props> = (props) => {
  const { children, box = '', align = '' } = props;
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const shadow =
    box === 'inner'
      ? '2px 2px 4px #CAD4E2 inset, -2px -2px 4px #FFF inset'
      : '4px 4px 8px #CAD4E2, -4px -4px 8px #FFF';
  const border = isDark ? '1px solid #30373D' : 'none';
  const bgColor = { light: 'gray.100', dark: 'gray.700' };

  return (
    <Box
      align={align}
      bg={bgColor[colorMode]}
      boxShadow={isDark ? '' : shadow}
      border={border}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BoxShadow;
