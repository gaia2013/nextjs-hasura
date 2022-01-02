import { VFC } from 'react'
import { Layout } from '../components/Layout'
import Image from 'next/image'

const Home: VFC = () => {
  return (
    <Layout title="Home">
      <p className="text-3xl font-bold">Next.js + GraphQL</p>
    </Layout>
  )
}
export default Home
