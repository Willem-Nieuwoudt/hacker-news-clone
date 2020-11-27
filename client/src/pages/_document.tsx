import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content='A hacker news clone project built with Next.js' />
          <meta name='keywords' content='Next.js, Sass, JavaScript, React' />

          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
            integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://kit.fontawesome.com/6623bddfaa.js' crossOrigin='anonymous'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
