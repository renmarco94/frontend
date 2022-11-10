import {
  Box,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react"
import React from "react"

export default function NewsLetter() {
  return (
    <Box
      px={{ base: "12.5px" }}
      w={{ base: "", lg: "640px" }}
      h={{ base: "", lg: "313px" }}
      m="0 auto 75px auto"
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
        Sign up for the NewsLetter
      </Text>
      <Box
        m="0 auto"
        w={{ base: "306px", lg: "538px" }}
        h={{ base: "66px", lg: "56px" }}
        mb="25px"
      >
        <Text textAlign="center" fontSize={{ base: "16px", lg: "20px" }}>
          If you want relevant updates occasionally, sign up for the private
          newsletter. Your email is never shared.
        </Text>
      </Box>
      <InputGroup
        pb={{ base: "50px", lg: "0px" }}
        colorScheme="blackAlpha"
        m="0 auto"
        maxW="520px"
      >
        <Input
          focusBorderColor="blackAlpha.900"
          borderRadius="0"
          pr="4.5rem"
          border="1px solid"
          borderColor="blackAlpha.900"
          placeholder="Enter your email..."
          _placeholder={{ color: "blackAlpha.900" }}
        />
        <InputRightElement width="9rem">
          <Button
            borderRadius="0"
            fontSize={{ base: "16px", lg: "20px" }}
            bg="blackAlpha.900"
            color="white"
            h="100%"
            w="9rem"
          >
            Sign Up
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}
