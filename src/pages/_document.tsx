
import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = "Michaels Blog";

class AppDocument extends Document {
  render() {
    return (
      <Html lang="es">
          <Head>
            <meta name="application-name" content={APP_NAME} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="default"
            />
            <meta name="apple-mobile-web-app-title" content={APP_NAME} />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#FFFFFF" />
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <body className="bg-white dark:bg-black text-white dark:text-black">
            <Main />
            <NextScript />
          </body>
      </Html>
    );
  }
}

export default AppDocument;
