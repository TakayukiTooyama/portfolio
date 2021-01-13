import { useColorMode } from '@chakra-ui/react';

type Params = {
  bglight?: string;
  bgdark?: string;
  colorlight?: string;
  colordark?: string;
};

const ColorMode = ({
  bglight = 'gray.100',
  bgdark = 'gray.900',
  colorlight = 'black',
  colordark = 'white',
}: Params): string[] => {
  const { colorMode } = useColorMode();
  const bgColor = { light: bglight, dark: bgdark };
  const color = { light: colorlight, dark: colordark };
  return [bgColor[colorMode], color[colorMode]];
};

export default ColorMode;
