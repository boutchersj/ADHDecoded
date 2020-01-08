import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/Head'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields: publishedDate,
            order: DESC
            }  
        ) {
          edges {
            node {
              title
              slug
              publishedDate (formatString:"MMMM Do, YYYY")
            }
          }
        }
      
      }
    `)

    const postsList = data.allContentfulBlogPost.edges.map (e => {
        return (
            <li className={blogStyles.post}>
                <Link to={`/blog/${e.node.slug}`}>
                    <h2>{e.node.title}</h2>
                    <p>{e.node.publishedDate}</p>
                </Link>
            </li>
        )
    })

    return (
        <Layout>
            <Head title="Blog" />
            <h2>Blog</h2>
            <ol className={blogStyles.posts}>
                {postsList}
            </ol>
        </Layout>
    )
}

export default BlogPage