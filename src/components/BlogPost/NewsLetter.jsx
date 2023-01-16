import {
  Box,
  Text,
  Input,
  Button,
  Textarea,
  FormControl,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { useForm, ValidationError } from "@formspree/react"

export default function NewsLetter() {
  const [state, handleSubmit] = useForm("xknaggqv")
  if (state.succeeded) {
    return (
      <>
        <Box
          px={{ base: "12.5px" }}
          maxW="640px"
          m="0 auto 50px auto"
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
            Thanks for sending
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
        </Box>
      </>
    )
  }
  return (
    <Box
      px={{ base: "12.5px" }}
      maxW="640px"
      m="0 auto 50px auto"
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
      <form onSubmit={handleSubmit}>
        <FormControl>
          <VStack
            spacing="25px"
            pb={{ base: "50px", lg: "25px" }}
            m="0 auto"
            maxW="520px"
          >
            <Input
              htmlFor="name"
              id="name"
              type="text"
              name="name"
              focusBorderColor="blackAlpha.900"
              borderRadius="0"
              pr="4.5rem"
              border="1px solid"
              borderColor="blackAlpha.900"
              placeholder="Enter your name..."
              _placeholder={{ color: "blackAlpha.900" }}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <Input
              htmlFor="email"
              id="email"
              type="text"
              name="email"
              focusBorderColor="blackAlpha.900"
              borderRadius="0"
              pr="4.5rem"
              border="1px solid"
              borderColor="blackAlpha.900"
              placeholder="Enter your email..."
              _placeholder={{ color: "blackAlpha.900" }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Textarea
              htmlFor="message"
              id="message"
              name="message"
              focusBorderColor="blackAlpha.900"
              borderRadius="0"
              border="1px solid"
              borderColor="blackAlpha.900"
              placeholder="Enter your message..."
              _placeholder={{ color: "blackAlpha.900" }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              type="submit"
              disabled={state.submitting}
              variant="primary"
              borderRadius="0"
              fontSize={{ base: "16px", lg: "20px" }}
              bg="blackAlpha.900"
              color="white"
              h="40px"
              w="9rem"
            >
              Sign Up
            </Button>
          </VStack>
        </FormControl>
      </form>
    </Box>
  )
}
