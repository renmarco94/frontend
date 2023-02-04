import React from "react"
import { graphql } from "gatsby"
import BlogHomepage from "../components/Homepage/BlogHomepage"
import Seo from "../components/Layout/Seo"

export const BlogHomeQuery = graphql`
  query blogHomePageQuery($limit: Int!, $offset: Int!) {
    allSanityPost(sort: { publishedAt: ASC }, limit: $limit, skip: $offset) {
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

export default function BlogHome({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext
  const posts = data.allSanityPost.nodes
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

export const Head = () => <Seo />
