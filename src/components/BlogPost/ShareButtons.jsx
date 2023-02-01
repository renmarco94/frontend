import React from "react"
import { Facebook, Twitter, Linkedin } from "react-feather"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import { Box, Text, Stack, Spacer, Flex } from "@chakra-ui/react"

export default function ShareButtons({ url, title, description }) {
  return (
    <Box maxW="640px" m="0 auto" p={{ base: "12.5px", md: "0" }}>
      <Flex direction="row">
        <Box>
          <Text fontSize="16px" fontWeight="semibold">
            Share :
          </Text>
        </Box>

        <Spacer />

        <Stack direction="row" spacing="4">
          <FacebookShareButton url={url} quote={description}>
            <Facebook strokeWidth={1.25} />
          </FacebookShareButton>

          <LinkedinShareButton url={url} title={title} summary={description}>
            <Linkedin strokeWidth={1.25} />
          </LinkedinShareButton>

          <TwitterShareButton url={url} title={description}>
            <Twitter strokeWidth={1.25} />
          </TwitterShareButton>
        </Stack>
      </Flex>
    </Box>
  )
}
