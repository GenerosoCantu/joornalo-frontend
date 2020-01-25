import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { loadGetInitialProps } from 'next/dist/lib/utils';

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    console.log("ONLY SERVER ///////////////////////////////////////////");
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, eureka: 'yes' }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" async />
          {/* <link href="/static/nprogress.css" rel="stylesheet" type="text/css" async /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument