import React from 'react'
import Layout from '../components/layout/Layout'
import {useStaticQuery, graphql} from 'gatsby'


const Courses = () => {
    const data = useStaticQuery(graphql`
    {
        allMdx {
          group(field: frontmatter___course) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `)
    return (
        <Layout>
            <div className="container">
            <h1>Our Courses</h1>
            {data.allMdx.group.map(group => {
               return <p>{group.tag}</p>
            })}
            {/* <Dump data={data} /> */}
            </div>
        </Layout>
    )
}

export default Courses;