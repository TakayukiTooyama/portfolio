import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { VFC } from 'react';
import theme from 'theme';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>TakayukiTooyama Portfolio</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Capriola&display=swap"
        rel="stylesheet"
      />
    </Head>
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default MyApp;
