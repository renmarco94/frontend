import React from "react"
import { Heading, Grid, GridItem, Image, Box } from "@chakra-ui/react"

export default function PostsList({ posts, title, home }) {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allStrapiBlogPost {
  //       nodes {
  //         Cover {
  //           alternativeText
  //           localFile {
  //             childImageSharp {
  //               gatsbyImageData
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const allPosts = data.allStrapiBlogPost.nodes
  // const posts = allPosts.slice(0, 8)
  return (
    <Box
      m="0 auto"
      mt="50px"
      maxW="640px"
      borderTop={home ? "1px solid" : "none"}
      borderColor="blackAlpha.900"
    >
      <Heading
        textAlign="center"
        fontSize={{ base: "32px", lg: "44px" }}
        fontWeight="bold "
        as="h2"
        mt={home ? "75px" : "none"}
        mb="50px "
      >
        {title}
      </Heading>
      <Grid
        mb="25px"
        templateRows={{ base: "repeat(4,1fr )", lg: "repeat(2,1fr )" }}
        templateColumns={{ base: "100%", lg: "repeat(2, 1fr)" }}
        rowGap={10}
        columnGap={8}
      >
        {posts.map((item, i) => {
          return (
            <GridItem px={{ base: "25px", md: "0px" }} key={i}>
              <Image
                width="100%"
                alt="post banner"
                src={
                  item.Cover.localFile.childImageSharp.gatsbyImageData.images
                    .fallback.src
                }
              />
              <Heading
                textAlign="center"
                mt="25px"
                as="h3"
                fontSize="22px"
                fontWeight="semibold"
              >
                {item.Title}
              </Heading>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}
