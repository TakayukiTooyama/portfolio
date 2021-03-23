import { ColorModeScript } from '@chakra-ui/react';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content="TakayukiTooyama Portfolio" />
          <link
            href="https://fonts.googleapis.com/css2?family=Capriola&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
