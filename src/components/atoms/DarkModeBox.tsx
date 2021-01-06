import { Box, BoxProps, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = BoxProps & {
  bgdark?: string;
  bglight?: string;
  colorDark?: string;
  colorLight?: string;
};

const DarkModeBox: FC<Props> = (props) => {
  const {
    bglight = 'gray.200',
    bgdark = 'gray.800',
    colorDark = 'white',
    colorLight = 'black',
    children,
  } = props;
  const { colorMode } = useColorMode();
  const bgColor = { light: bglight, dark: bgdark };
  const color = { light: colorLight, dark: colorDark };
  return (
    <Box bg={bgColor[colorMode]} color={color[colorMode]} {...props}>
      {children}
    </Box>
  );
};

export default DarkModeBox;
