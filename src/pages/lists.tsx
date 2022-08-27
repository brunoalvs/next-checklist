import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout } from '../components/Layout'
import { Lists } from '../components/Lists'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Task Lists</title>
        </Head>

        <Lists />
      </Layout>
    </>
  )
}

export default Home
