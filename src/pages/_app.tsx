import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import defaultSEOConfig from '../../next-seo.config';
import { ThemeProvider } from 'next-themes';
import React from 'react';

function MichyaraqueDev({ Component, pageProps }: AppProps) {

  const [isContentReady, setContentReady] = React.useState(false);

  React.useEffect(() => {
    setContentReady(true);
  }, []);

  if (isContentReady) {
    return (
      <ThemeProvider attribute='class'>
        <DefaultSeo {...defaultSEOConfig} />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MichyaraqueDev
