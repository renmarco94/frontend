import React from "react"
import { graphql } from "gatsby"
import PostsList from "../components/Homepage/PostsList"
import Seo from "../components/Layout/Seo"

export const CategoryQuery = graphql`
  query blogCategoryPageQuery($cat: String!) {
    allSanityPost(
      filter: { categories: { elemMatch: { title: { eq: $cat } } } }
    ) {
      nodes {
        title
        slug {
          current
        }
        mainImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default function BlogCategory({ pageContext, data }) {
  const { cat } = pageContext
  const posts = data.allSanityPost.nodes
  return (
    <>
      <PostsList posts={posts} title={cat.toUpperCase()} />
    </>
  )
}

export const Head = () => <Seo />
