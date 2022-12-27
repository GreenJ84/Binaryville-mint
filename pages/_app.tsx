import type { AppProps } from 'next/app'
import Head from 'next/head'

import NavBar from '../compnents/navbar/NavBar'
import Footer from '../compnents/footer/Footer'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Cyber NFT Minting Platform" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>)
}
