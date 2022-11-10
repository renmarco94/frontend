import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  Heading,
  Container,
} from "@chakra-ui/react"

export default function ReadNext() {
  const data = useStaticQuery(graphql`
    query MyNextPostQuery {
      allStrapiBlogPost {
        nodes {
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
  `)
  const allPosts = data.allStrapiBlogPost.nodes
  const posts = allPosts.slice(0, 6)
  return (
    <Box
      mt={{ base: "50px", md: "75px" }}
      pt="50px"
      borderTop="1px solid"
      borderColor="blackAlpha.900"
    >
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize={{ base: "32px", md: "44px" }}
      >
        What to read next
      </Text>
      <Grid
        m="25px 0 50px 0"
        templateRows={{ base: "repeat(6,300px )", lg: "repeat(2,300px )" }}
        templateColumns={{ base: "290px", lg: "repeat(3, 280px)" }}
        // templateRows={{ base: "repeat(6,1fr )", lg: "repeat(2,1fr )" }}
        // templateColumns={{ base: "80%", lg: "repeat(3, 1fr)" }}
        rowGap={{ base: "5", lg: "10" }}
        columnGap={"32px"}
        justifyContent="center"
      >
        {posts.map((item, i) => {
          return (
            <GridItem key={i}>
              <Image
                width="304px"
                h="176px"
                objectFit="cover"
                alt="post banner"
                src={
                  item.Cover.localFile.childImageSharp.gatsbyImageData.images
                    .fallback.src
                }
              />
              <Heading
                textAlign="center"
                mt="12.5px"
                as="h3"
                fontSize="22px"
                fontWeight="semibold"
              >
                Here are some things you should know regarding how we work
              </Heading>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}
