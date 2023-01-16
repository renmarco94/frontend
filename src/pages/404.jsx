import React from "react"
import { Link } from "gatsby"
import { Box, Text, Button } from "@chakra-ui/react"
import Seo from "../components/Layout/Seo"

export default function ErrorPage() {
  return (
    <>
      <Box
        px={{ base: "12.5px" }}
        maxW="640px"
        m="50px auto"
        border="1px solid"
        borderTop="12.5px solid"
        borderColor="blackAlpha.900"
      >
        <Text
          textAlign="center"
          fontSize={{ base: "29px", lg: "36px" }}
          fontWeight="bold"
          m="50px 0 12.5px 0"
        >
          Errore 404
        </Text>
        <Box
          m="0 auto"
          w={{ base: "306px", lg: "538px" }}
          h={{ base: "66px", lg: "56px" }}
          mb="75px"
        >
          <Text textAlign="center" fontSize={{ base: "16px", lg: "20px" }}>
            La pagina che stavi cercando non esiste
          </Text>
          <Text mt="25px" textAlign="center">
            <Link to="/">
              <Button
                variant="primary"
                borderRadius="0"
                fontSize={{ base: "16px", lg: "20px" }}
                bg="blackAlpha.900"
                color="white"
                h="40px"
                w="9rem"
              >
                Home
              </Button>
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  )
}

export const Head = () => <Seo description="Pagina 404" />
