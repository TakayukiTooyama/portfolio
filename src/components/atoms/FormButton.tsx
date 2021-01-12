import { Button, ButtonProps, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = ButtonProps & {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  isLoading: boolean;
  disabled: boolean;
};

const FormButton: FC<Props> = ({
  label = '',
  type = 'button',
  isLoading,
  disabled,
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const shadow = isDark
    ? 'none'
    : 'inset -3px -4px 5px #babecc, inset 4px 5px 10px #f5f5f5';
  const hoverShadow = 'inset 0px 0px 1px #babecc, inset 0px 0px 1px #f5f5f5';
  const border = isDark ? '1px solid #30373D' : 'none';
  const bgColor = { light: 'white', dark: 'gray.800' };
  const color = { light: 'black', dark: 'white' };
  return (
    <Button
      boxShadow={shadow}
      border={border}
      color={color[colorMode]}
      bg={bgColor[colorMode]}
      _hover={{ boxShadow: hoverShadow, border }}
      w="100%"
      maxW="200px"
      type={type}
      isLoading={isLoading}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default FormButton;
