import React from "react"
import { Box, Text } from "@chakra-ui/react"

export default function Tags() {
  return (
    <Box maxW="640px" m="0 auto" px={{ base: "12.5px", md: "0" }}>
      <Text
        my="12.5px"
        fontWeight="medium"
        fontSize={{ base: "14px", md: "16px" }}
      >
        Tag: NUTRITION
      </Text>
    </Box>
  )
}
