import { Box } from "@chakra-ui/react"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Post() {
  const data = useStaticQuery(graphql`
    query MyPostQuery {
      allStrapiBlogPost {
        nodes {
          Date
          Time
          Title
          category {
            Category
          }
          childStrapiBlogPostPostTextnode {
            childMarkdownRemark {
              excerpt
              html
            }
          }
        }
      }
    }
  `)
  return (
    <div
      className="content-container"
      dangerouslySetInnerHTML={{
        __html:
          data.allStrapiBlogPost.nodes[1].childStrapiBlogPostPostTextnode
            .childMarkdownRemark.html,
      }}
    />
  )
}
