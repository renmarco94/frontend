import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Heading, Text, Box } from "@chakra-ui/react"

export default function HeroPost({ title, mainImage, excerpt }) {
  return (
    <>
      <Container mb="50px" maxW="854px">
        <Heading
          textAlign="center"
          fontWeight="bold"
          as="h1"
          mt={{ base: "50px", lg: "75px" }}
          fontSize={{ base: "36px", lg: "54px" }}
        >
          {title}
        </Heading>
        <Box
          m="0 auto"
          w={{ base: "300px", lg: "500px" }}
          h={{ base: "81px", lg: "68px " }}
        >
          <Text
            textAlign="center"
            mt={{ base: "40px", lg: "50px" }}
            fontWeight="medium"
            fontSize={{ base: "16px", lg: "20px" }}
          >
            {excerpt}
          </Text>
        </Box>
      </Container>
      <GatsbyImage
        width="100%"
        alt={`${title} post cover image`}
        image={mainImage.asset.gatsbyImageData}
      />
    </>
  )
}
