import React from "react"
import { Box, Text,Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

export default function Tags({cat}) {
  return (
    <Box maxW="640px" m="0 auto" px={{ base: "12.5px", md: "0" }}>
      <Text
        my="12.5px"
        fontWeight="medium"
        fontSize={{ base: "14px", md: "16px" }}
      >
        Tag: <Link _hover={{ underline: "none" }} as={GatsbyLink} to={`/blog/${cat}`} > {cat.toUpperCase()}</Link>
      </Text>
    </Box>
  )
}
