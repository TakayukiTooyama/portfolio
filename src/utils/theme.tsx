import { theme as chakraTheme } from '@chakra-ui/react';

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };
// const breakpoints = ['40em', '52em', '64em'];
const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    purple: {
      50: '#ececff',
      100: '#c8caed',
      200: '#a3a7db',
      300: '#7e83cc',
      400: '#5b60bd',
      500: '#4146a3',
      600: '#333780',
      700: '#24275c',
      800: '#141739',
      900: '#060718',
    },
    gray: {
      ...chakraTheme.colors.gray,
      200: '#EBECF1',
    },
    black: '#16161D',
  },
  fonts,
  // breakpoints,
};

export default theme;
