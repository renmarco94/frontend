import React from "react"
import { graphql } from "gatsby"
import PostsList from "../components/Homepage/PostsList"

export const CategoryQuery = graphql`
  query blogCategoryPageQuery($cat: String!) {
    allStrapiBlogPost(filter: { category: { Category: { eq: $cat } } }) {
      nodes {
        Title
        Cover {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          id
        }
        category {
          Category
        }
      }
    }
  }
`

export default function BlogCategory({ data, pageContext }) {
  const { cat } = pageContext
  const posts = data.allStrapiBlogPost.nodes
  console.log(posts)
  return (
    <>
      <PostsList posts={posts} title={cat.toUpperCase()} />
    </>
  )
}
