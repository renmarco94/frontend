import React from "react"
import { Container, Heading, Text, Box, Image } from "@chakra-ui/react"

export default function Hero() {
  return (
    <Container pt={{ base: "50px", lg: "75px" }} maxW="854px">
      <Image
        w="100%"
        alt="my photo"
        src="https://dummyimage.com/854x533/000/fff"
      />
      <Heading
        textAlign="center"
        fontWeight="bold"
        as="h1"
        fontSize={{ base: "36px", lg: "54px" }}
        mt="50px"
      >
        A few words about this blog platform, Ghost, and how this site was made
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
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </Text>
      </Box>
    </Container>
  )
}
