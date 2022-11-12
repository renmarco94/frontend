import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  Heading,
  Link
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

export default function ReadNext() {
  const data = useStaticQuery(graphql`
    query MyNextPostQuery {
    allSanityPost(
      sort: {order: ASC, fields: publishedAt}
      limit: 6
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
  `)
  const allPosts = data.allSanityPost.nodes
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
        m="25px 0"
        templateRows={{ base: "repeat(6,300px )", lg: "repeat(2,300px )" }}
        templateColumns={{ base: "290px", lg: "repeat(3, 280px)" }}
        rowGap={{ base: "0", lg: "0" }}
        columnGap={"32px"}
        justifyContent="center"
      >
        {allPosts.map((item, i) => {
          return (
            <Link _hover={{ underline: "none" }} key={i} as={GatsbyLink} to={`/blog/${item.slug.current}`} >
            <GridItem  key={i}>
              <Image
                width="304px"
                h="176px"
                objectFit="cover"
                alt="post banner"
                src={
                  item.mainImage.asset.gatsbyImageData.images
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
                {item.title}
              </Heading>
            </GridItem>
            </Link>
          )
        })}
      </Grid>
    </Box>
  )
}
