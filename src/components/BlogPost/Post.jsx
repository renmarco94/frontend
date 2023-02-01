import { Box } from "@chakra-ui/react"
import React from "react"
import MyPortableText from "./MyPortableText"

export default function Post({ blogPost }) {
  return (
    <>
      <Box
        p={{ base: "0 12.5px 0 12.5px", md: "0 0 0 0" }}
        m="0 auto 50px auto"
        maxW="640px"
      >
        <MyPortableText value={blogPost} />
      </Box>
    </>
  )
}
