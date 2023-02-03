import React from "react"
import { Box, Text, Spacer, Flex } from "@chakra-ui/react"
import ShareButtons from "./ShareButtons"

export default function ShareFooter({ title, description, url }) {
  return (
    <Flex
      maxW="640px"
      m="0 auto"
      p={{ base: "12.5px", md: "0" }}
      direction="row"
    >
      <Box>
        <Text fontSize="16px" fontWeight="semibold">
          Share:
        </Text>
      </Box>

      <Spacer />
      <ShareButtons title={title} description={description} url={url} />
    </Flex>
  )
}
