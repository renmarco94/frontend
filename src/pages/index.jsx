import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Homepage/Hero"
import PostsList from "../components/Homepage/PostsList"
import NewsLetter from "../components/BlogPost/NewsLetter"
import Seo from "../components/Layout/Seo"

export const query = graphql`
  {
    allSanityPost(sort: { order: ASC, fields: publishedAt }, limit: 4) {
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

export default function Index({ data }) {
  const posts = data.allSanityPost.nodes
  return (
    <>
      <Hero />
      <PostsList home title="Latest Post" posts={posts} />
      <NewsLetter />
    </>
  )
}

export const Head = () => <Seo />
