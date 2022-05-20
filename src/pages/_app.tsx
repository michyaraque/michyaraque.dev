import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import defaultSEOConfig from '../../next-seo.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <span className="h-[40px] font-bold bg-gray-200 w-full flex justify-center items-center">
    🚧 Sitio en construcción, poco a poco 🚧
    </span>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  )
}

export default App
