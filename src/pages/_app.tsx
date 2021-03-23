import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { VFC } from 'react';
import theme from 'theme';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>ポートフォリオ | Takayuki Tooyama</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default MyApp;
