import { theme as chakraTheme } from '@chakra-ui/react';

const fonts = {
  heading: `'Capriola', system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Segoe UI", "Meiryo", sans-serif`,
  body: `'Capriola', system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Segoe UI", "Meiryo", sans-serif`,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#000000', // darkMainBgColor
    gray: {
      ...chakraTheme.colors.gray,
      50: '#EFEFEF', // darkMainText
      100: '#EBECF1', // lightMainBgColor
      200: '#8E8E8E', // lightSubText, darkSubText
      700: '#292929', // darkSubBgColor
      900: '#111111', // lightMainText
    },
    brand: {
      600: '#384464', // lightSubBgColor
      700: '#24275c', // cardBgColor
      800: '#202f61',
    },
  },
  fonts,
};

export default theme;
