import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Heading, Box, Flex, Link } from "@chakra-ui/react"

export default function PostsList({ posts, title, home }) {
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
      <Flex justifyContent="space-between" flexWrap="wrap">
        {posts.map((item, i) => {
          return (
            <Link
              _hover={{ underline: "none" }}
              key={i}
              as={GatsbyLink}
              to={`/blog/${item.slug.current}`}
            >
              <Box
                m={{ base: "0 auto 25px auto", lg: "0 0 25px 0" }}
                w={{ base: "90%", lg: "304px" }}
              >
                <GatsbyImage
                  style={{ width: "100%" }}
                  alt="post banner"
                  image={item.mainImage.asset.gatsbyImageData}
                />
                <Heading
                  textAlign="center"
                  mt="25px"
                  as="h3"
                  fontSize="22px"
                  fontWeight="semibold"
                >
                  {item.title}
                </Heading>
              </Box>
            </Link>
          )
        })}
      </Flex>
    </Box>
  )
}
