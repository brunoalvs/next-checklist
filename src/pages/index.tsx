import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { useTodoContext } from '../contexts/todo'
import { Layout } from '../components/Layout'
import { Tasks } from '../components/Tasks'

const Home: NextPage = () => {
  const { lists } = useTodoContext()

  // const [listActive, setListActive] = useState(lists[0])

  useEffect(() => {
    // setListActive(lists.find(list => list.active) || lists[0])
  }, [lists])

  useEffect(() => {
    const localItems = localStorage.getItem('items')
    if (localItems) {
      // setItems(JSON.parse(localItems))
    }
  }, [])

  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Tasks />
      </Layout>
    </>
  )
}

export default Home
