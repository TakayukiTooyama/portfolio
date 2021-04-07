import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = BoxProps & {
  boxStyle?: string;
  align?: string;
  onClick?: () => void;
};

const BoxShadow: FC<Props> = ({
  children,
  boxStyle = '',
  align = '',
  onClick,
  ...props
}) => {
  const shadow =
    boxStyle === 'inner'
      ? '2px 2px 4px #CAD4E2 inset, -2px -2px 4px #FFF inset'
      : '4px 4px 8px #CAD4E2, -4px -4px 8px #FFF';

  return (
    <Box
      align={align}
      bg={useColorModeValue('gray.100', 'gray.700')}
      boxShadow={useColorModeValue(shadow, '')}
      border={useColorModeValue('none', '1px solid #30373D')}
      onClick={onClick}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BoxShadow;
