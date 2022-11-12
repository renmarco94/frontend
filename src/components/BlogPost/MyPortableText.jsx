import { PortableText } from "@portabletext/react"
import React from "react"
import { getImage } from "@sanity/asset-utils"
import { Text, Heading, Image, Box } from "@chakra-ui/react"
import sanityConfig from "../../../sanity-config"

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Text fontSize={{ base: "16px", lg: "20px" }} m="25px 0">
        {children}
      </Text>
    ),
    h2: ({ children }) => <Heading>{children}</Heading>,
    h3: ({ children }) => <Heading>{children}</Heading>,
    h4: ({ children }) => (
      <Heading
        as="h4"
        fontSize={{ base: "13px", lg: "16px" }}
        textAlign="center"
      >
        {children}
      </Heading>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset
      return (
        <Box m="25px 0 12.5px 0" bg="red" w="100%">
          <Image alt="post image" w="100%" src={imageData.url} />
        </Box>
      )
    },
  },
}

function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />
}

export default MyPortableText
