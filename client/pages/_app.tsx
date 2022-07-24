import React from 'react'
import { MoralisProvider } from 'react-moralis'
import Navbar from '../src/components/Navbar'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="ebB4EebmYmj4XEVwGz6dv2PeSqojxSXVZL6KuIW2" serverUrl="https://iocptioyfu8c.usemoralis.com:2053/server">
      <Navbar />
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
