import React from 'react'
import Layout from '../components/layout/Layout'
import Showcase from '../components/layout/Showcase'
import LatestPosts from '../components/LatestPosts'
import AllPosts from '../components/AllPosts'
import { Helmet } from 'react-helmet'
import EmailAdd from '../components/EmailAdd'
import { Link } from 'gatsby'
import Snow from '../components/Snow'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Dev with Nano | Dev Blog</title>
      </Helmet>
      <Showcase />
      <div className="container">
        <Snow />
        {/* <div className="alert alert-success">
          Courses page in beta! <Link to="/courses">Click Here</Link>
        </div> */}
      </div>
      <AllPosts />
      {/* <EmailAdd /> */}
    </Layout>
  )
}
