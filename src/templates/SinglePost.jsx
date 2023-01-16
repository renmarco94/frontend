import React from "react"
import { graphql } from "gatsby"
import CompletePost from "../components/BlogPost/CompletePost"
import Seo from "../components/Layout/Seo"

export const SinglePostQuery = graphql`
  query singlePostQueryQuery($id: String!) {
    allSanityPost(filter: { slug: { current: { eq: $id } } }) {
      nodes {
        title
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        author {
          bio {
            children {
              text
            }
          }
          name
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        publishedAt(formatString: "MMM DD,YYYY")
        readTime
        mainImage {
          asset {
            gatsbyImageData
          }
        }
        _rawBody
        excerpt
        body {
          children {
            text
          }
        }
      }
    }
  }
`

export default function SinglePost({ data }) {
  const post = data.allSanityPost.nodes[0]
  console.log(post)
  return (
    <>
      <CompletePost
        author={post.author}
        cat={post.categories[0].title}
        slugCat={post.categories[0].slug.current}
        title={post.title}
        mainImage={post.mainImage}
        excerpt={post.excerpt}
        blogPost={post._rawBody}
      />
    </>
  )
}

export const Head = () => <Seo />
