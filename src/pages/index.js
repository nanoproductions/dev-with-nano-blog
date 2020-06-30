import React from 'react'
import Layout from '../components/layout/Layout'
import Showcase from '../components/layout/Showcase'
import LatestPosts from '../components/LatestPosts'
import AllPosts from '../components/AllPosts'
import { Helmet } from 'react-helmet'
import EmailAdd from '../components/EmailAdd'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Dev with Nano</title>
      </Helmet>
      {/* <Showcase /> */}
      <AllPosts />
      <EmailAdd />
    </Layout>
  )
}
