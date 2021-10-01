import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => {
          const { id, frontmatter, body } = node
          return (
            <article key={id}>
              <h2>{frontmatter.title}</h2>
              <p>Posted: {frontmatter.date}</p>
              <MDXRenderer>
                {body}
              </MDXRenderer>
            </article>
          )
        })
      }
    </Layout>
  )


export const query = graphql`
 query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      body
    }
  }
}
`

export default BlogPage