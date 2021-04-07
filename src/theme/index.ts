/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: `'Capriola', system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Segoe UI", "Meiryo", sans-serif`,
  body: `"Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif`,
};

const theme = extendTheme({
  colors: {
    black: '#000000', // darkMainBgColor
    gray: {
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
  // components: {
  //   Button: {
  //     baseStyle: {
  //       fontWeight: 'bold',
  //     },
  //     sizes: {
  //       xl: {
  //         h: '56px',
  //         fontSize: 'lg',
  //         px: '32px',
  //       },
  //     },
  //     variants: {
  //       'with-shadow': {
  //         bg: 'red.400',
  //         boxShadow: '0 0 2px 2px #efdfde',
  //       },
  //       solid: (props) => ({
  //         bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
  //       }),
  //     },
  //   },
  // },
});
export default theme;
