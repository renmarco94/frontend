import { Box, HStack, Text } from "@chakra-ui/react"
import React from "react"

const service = [
  "NUTRITION",
  "TRAINING",
  "RESEARCH",
  "NUTRITION",
  "TRAINING",
  "RESEARCH",
  "NUTRITION",
  "TRAINING",
  "RESEARCH",
  "NUTRITION",
  "TRAINING",
  "RESEARCH",
]

const social = [
  { name: "Twitter", address: "https://twitter.com/home" },
  { name: "Linkedin", address: "https://www.linkedin.com/" },
  { name: "Instagram", address: "https://www.instagram.com/" },
]

export default function Footer() {
  return (
    <Box
      pt={{ base: "28px", lg: "25px" }}
      bg="blackAlpha.900"
      h={{ base: "481px", lg: "489px" }}
    >
      <HStack flexWrap="nowrap" spacing="1.2rem">
        {service.map((item, i) => {
          return i % 2 === 0 ? (
            <Text
              key={i}
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight="medium"
              color="white"
            >
              {item}
            </Text>
          ) : (
            <Text
              key={i}
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight="semibold"
              color="white"
            >
              {item}
            </Text>
          )
        })}
      </HStack>
      <Text
        mt="75px"
        textAlign="center"
        fontWeight="bold"
        color="white"
        fontSize={{ base: "30px", lg: "45px" }}
      >
        MARCO RENDINE
      </Text>
      <Box h="71px" w={{ base: "287px", lg: "488px" }} m="0 auto">
        <Text
          mt="25px"
          fontSize={{ base: "13px", lg: "16px" }}
          fontWeight="medium"
          textAlign="center"
          color="white"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </Text>
      </Box>
      <HStack
        w={{ base: "225px", lg: "280px" }}
        m="0 auto"
        spacing={{ base: "28px", lg: "34px" }}
      >
        {social.map((item, i) => {
          return (
            <a key={i} href={`${item.address}`}>
              <Box borderBottom="1px solid" borderBottomColor="white">
                <Text
                  mt="50px"
                  fontSize={{ base: "13px", lg: "16px" }}
                  fontWeight="medium"
                  color="white"
                >
                  {item.name}
                </Text>
              </Box>
            </a>
          )
        })}
      </HStack>
      <Text
        mt="50px"
        color="white"
        fontSize="12px"
        fontWeight="medium"
        textAlign="center"
      >
        © {new Date().getFullYear()} Marco Rendine &#169;
      </Text>
      <Text
        color="white"
        fontSize="12px"
        fontWeight="medium"
        textAlign="center"
      >
        All rights reserved.
      </Text>
    </Box>
  )
}
