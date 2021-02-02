import Head from 'next/head'
// files
import HomeComp from '../components/Home'

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <HomeComp />
    </>
  )
}

export default HomePage
