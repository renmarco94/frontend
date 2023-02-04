import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import ShareButtons from "./ShareButtons"

export default function Author({ header, author, title, description, url }) {
  return (
    <Box
      p={{ base: "25px 12.5px 0 12.5px", md: "25px 0 0 0" }}
      m="0 auto"
      mt="25px"
      mb="50px"
      maxW="640px"
      borderTop={header ? "1px solid" : "1px dotted"}
      borderColor="blackAlpha.900"
    >
      <Flex alignItems="center">
        {header ? (
          <GatsbyImage
            style={{
              borderRadius: "100%",
              width: "100px",
              marginRight: "12.5px",
            }}
            alt={author.Name}
            image={author.image.asset.gatsbyImageData}
          />
        ) : (
          <GatsbyImage
            style={{
              borderRadius: "100%",
              width: "300px",
              marginRight: "12.5px",
            }}
            alt={author.Name}
            image={author.image.asset.gatsbyImageData}
          />
        )}
        {header ? (
          <>
            <Flex flexDirection="column" justifyContent="center">
              <Box fontSize={{ base: "13px", md: "16px" }} fontWeight="bold">
                {author.name.toUpperCase()}
              </Box>
              <Box fontSize={{ base: "13px", md: "16px" }} fontWeight="regular">
                Apr 15, 2020 · 4 min read
              </Box>
            </Flex>
            <Box ml="auto">
              <ShareButtons title={title} description={description} url={url} />
            </Box>
          </>
        ) : (
          <Box>
            <Text
              as="span"
              fontWeight="bold"
              fontSize={{ base: "14px", md: "16px" }}
            >
              {author.name} &nbsp;
            </Text>
            <Text
              as="span"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="medium"
            >
              is a {author.bio[0].children[0].text}
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  )
}
