import { Box } from "@chakra-ui/react"
import React from "react"
import MyPortableText from "./MyPortableText"

export default function Post({ blogPost }) {
  return (
    <>
      <Box
        p={{ base: "25px 12.5px 0 12.5px", md: "25px 0 0 0" }}
        m="0 auto"
        mt="25px"
        mb="50px"
        maxW="640px"
      >
        <MyPortableText value={blogPost} />
      </Box>
    </>
  )
}
