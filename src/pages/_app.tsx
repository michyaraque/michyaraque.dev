import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import defaultSEOConfig from '../../next-seo.config';
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <span className="h-[40px] font-bold light:bg-zinc-50 bg-zinc-600 w-full text-white  flex justify-center items-center">
        🚧 Sitio en construcción, poco a poco 🚧
      </span>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
