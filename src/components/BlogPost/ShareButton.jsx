import React from "react"
import { ButtonGroup, Button, Box, Text, Stack } from "@chakra-ui/react"
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai"

export default function ShareButton() {
  return (
    <Box maxW="640px" m="0 auto" p={{ base: "12.5px", md: "0" }}>
      <Text m="25px 0 12.5px 0" fontSize="16px" fontWeight="semibold">
        Share :
      </Text>
      <Stack direction="row" spacing={4}>
        <Button
          w="30%"
          leftIcon={<AiOutlineTwitter fontSize="20px" />}
          size="lg"
          color="blackAlpha.900"
          bg="white"
          border="2px solid"
          borderColor="gray.100"
        />
        <Button
          w="30%"
          leftIcon={<AiFillLinkedin fontSize="20px" />}
          size="lg"
          color="blackAlpha.900"
          bg="white"
          border="2px solid"
          borderColor="gray.100"
        />
        <Button
          w="30%"
          leftIcon={<AiFillInstagram fontSize="20px" />}
          size="lg"
          color="blackAlpha.900"
          bg="white"
          border="2px solid"
          borderColor="gray.100"
        />
      </Stack>
    </Box>
  )
}
