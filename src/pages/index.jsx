import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Homepage/Hero"
import PostsList from "../components/Homepage/PostsList"

export const query = graphql`
  {
    allStrapiBlogPost(sort: { order: ASC, fields: Date }, limit: 4) {
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

export default function Index({ data }) {
  const posts = data.allStrapiBlogPost.nodes
  return (
    <>
      <Hero />
      <PostsList home title="Latest Post" posts={posts} />
    </>
  )
}
