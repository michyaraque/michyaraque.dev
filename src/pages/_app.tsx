import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { generateDefaultSeo } from 'next-seo/pages'
import defaultSEOConfig from '../../next-seo.config';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import Head from 'next/head';

function MichyaraqueDev({ Component, pageProps }: AppProps) {

  const [isContentReady, setContentReady] = React.useState(false);

  React.useEffect(() => {
    setContentReady(true);
  }, []);

  if (isContentReady) {
    return (
      <ThemeProvider attribute='class'>
        <Head>
          {generateDefaultSeo(defaultSEOConfig)}
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MichyaraqueDev
