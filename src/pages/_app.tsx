import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import defaultSEOConfig from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
