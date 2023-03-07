import Navbar from '@/components/layouts'
import Footer from '../components/footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
 
}
