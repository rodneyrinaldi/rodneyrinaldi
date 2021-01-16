import Head from 'next/head'
import HomeComp from '../components/home'

export default function Index() {
  return (
    <>
      <Head>
        <title>Rodney Rinaldi Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComp />
    </>
  )
}
