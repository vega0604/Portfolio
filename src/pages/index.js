import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Vega</title>
        <link rel='icon' href='logo.svg'/>
      </Head>
      <Navbar />
    </>
  )
}
