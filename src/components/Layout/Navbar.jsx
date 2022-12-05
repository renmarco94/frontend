import {
  HStack,
  Text,
  useMediaQuery,
  Box,
  VStack,
  IconButton,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import DrawerSearch from "./DrawerSearch"

export default function Navbar() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  return (
    <HStack
      alignContent="center"
      justifyContent="space-between"
      px={{ base: "20px", lg: "60px" }}
      as="header"
      h={{ md: "65px", lg: "134px" }}
      borderBottom="1px"
      borderColor="gray.400"
    >
      <Text
        fontWeight="bold"
        color="blackAlpha.900"
        fontSize={{ base: "30px", lg: "45px" }}
      >
        MARCO RENDINE
      </Text>
      {isLargerThan768 ? (
        <HStack spacing="9">
          <Link to="/">
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
                color="blackAlpha.900"
                fontSize="20px"
                fontStyle="italic"
                fontWeight="medium"
              >
                HOME
              </Box>
            </VStack>
          </Link>
          <Link to="/blog">
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
                color="blackAlpha.900"
                fontSize="20px"
                fontStyle="italic"
                fontWeight="medium"
              >
                BLOG
              </Box>
            </VStack>
          </Link>
          <DrawerSearch />
        </HStack>
      ) : (
        <IconButton
          variant="ghost"
          _hover={{ bg: "white" }}
          aria-label="Toggle Sidebar"
          icon={<GiHamburgerMenu fontSize="1.5rem" />}
        />
      )}
    </HStack>
  )
}
