import Document, { Html, Main, NextScript } from "next/document";
import Head from "next/head";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" /> 
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}