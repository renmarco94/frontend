import React from "react"
import { graphql } from "gatsby"
import BlogHomepage from "../components/Homepage/BlogHomepage"

export const BlogHomeQuery = graphql`
  query blogHomePageQuery($limit: Int!, $offset: Int!) {
    allStrapiBlogPost(
      sort: { order: ASC, fields: Date }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        Title
        Cover {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default function BlogHome({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext
  const posts = data.allStrapiBlogPost.nodes
  return (
    <>
      <BlogHomepage
        posts={posts}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </>
  )
}
