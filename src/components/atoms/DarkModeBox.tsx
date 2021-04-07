import { Box, BoxProps, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = BoxProps & {
  bgdark?: string;
  bglight?: string;
  colorDark?: string;
  colorlight?: string;
};

const DarkModeBox: FC<Props> = (props) => {
  const {
    bglight = 'gray.100',
    bgdark = 'gray.900',
    colorDark = 'white',
    colorlight = 'black',
    children,
  } = props;
  const { colorMode } = useColorMode();
  const bgColor = { light: bglight, dark: bgdark };
  const color = { light: colorlight, dark: colorDark };
  return (
    <Box bg={bgColor[colorMode]} color={color[colorMode]} {...props}>
      {children}
    </Box>
  );
};

export default DarkModeBox;
