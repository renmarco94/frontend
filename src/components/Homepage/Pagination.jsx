import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Button, Stack, Link } from "@chakra-ui/react"

export default function Pagination({ currentPage, numberOfPages }) {
  const prevPage =
    currentPage - 1 === 0 || currentPage - 1 === 1
      ? `/blog`
      : `/blog/${currentPage - 1}`

  const nextPage =
    currentPage === numberOfPages
      ? `/blog`
      : `/blog/${currentPage + 1}`
  return (
    <Stack mb="25px" direction="row" justify="center">
      <Stack direction="row">
        <Button
          _hover={{ bg: "blackAlpha.900" }}
          borderRadius="0"
          fontSize={{ base: "16px", lg: "20px" }}
          bg="blackAlpha.900"
          color="white"
          h="45px"
          w="9rem"
        >
          <Link _hover={{ underline: "none" }} as={GatsbyLink} to={prevPage}>
            Prev
          </Link>
        </Button>

        <Button
          _hover={{ bg: "blackAlpha.900" }}
          borderRadius="0"
          fontSize={{ base: "16px", lg: "20px" }}
          bg="blackAlpha.900"
          color="white"
          h="45px"
          w="9rem"
        >
          <Link _hover={{ underline: "none" }} as={GatsbyLink} to={nextPage}>
            Next
          </Link>
        </Button>
      </Stack>
    </Stack>
  )
}
