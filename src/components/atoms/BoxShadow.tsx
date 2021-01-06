import { Box, BoxProps, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = BoxProps & {
  inner?: boolean;
};

const BoxShadow: FC<Props> = (props) => {
  const { children, inner = true } = props;
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const shadow = inner
    ? 'inset 5px 5px 5px #babecc, inset -7px -11px 10px #f5f5f5'
    : 'inset -3px -4px 5px #babecc, inset 4px 5px 10px #f5f5f5';
  const border = isDark ? '1px solid #30373D' : '';
  const bgColor = { light: 'white', dark: 'gray.800' };

  return (
    <Box
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
