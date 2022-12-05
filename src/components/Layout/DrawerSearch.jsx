import React from "react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Box,
  VStack,
} from "@chakra-ui/react"

export default function DrawerSearch() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <VStack
        h="134px"
        alignContent="center"
        justifyContent="center"
        _hover={{
          borderBottom: "2px solid",
          borderColor: "blackAlpha.900",
        }}
      >
        <Box
          as="button"
          ref={btnRef}
          onClick={onOpen}
          color="blackAlpha.900"
          fontSize="20px"
          fontStyle="italic"
          fontWeight="medium"
        >
          SEARCH
        </Box>
      </VStack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input
              placeholder="Type here..."
              focusBorderColor="blackAlpha.900"
              borderRadius="0"
              pr="4.5rem"
              border="1px solid"
              borderColor="blackAlpha.900"
              _placeholder={{ color: "blackAlpha.900" }}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button
              _hover={{ bg: "blackAlpha.900" }}
              borderRadius="0"
              fontSize={{ base: "16px", lg: "20px" }}
              bg="blackAlpha.900"
              color="white"
              h="45px"
              w="9rem"
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
