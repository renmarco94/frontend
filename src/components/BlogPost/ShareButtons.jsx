import React from "react"
import { Facebook, Twitter, Linkedin } from "react-feather"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import { Stack } from "@chakra-ui/react"

export default function ShareButtons({ url, title, description }) {
  return (
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
  )
}
