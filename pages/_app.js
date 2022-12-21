import { NextUIProvider } from '@nextui-org/react'
import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (<NextUIProvider><Component {...pageProps} /></NextUIProvider>)
}

export default Application
