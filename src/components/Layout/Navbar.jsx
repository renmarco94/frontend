import React, { useState } from "react"
import {
  HStack,
  Text,
  useMediaQuery,
  Box,
  VStack,
  IconButton,
  useDisclosure,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { AlignJustify } from "react-feather"
import axios from "axios"
import SearchCard from "./SearchCard"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    localSearchBlogs {
      publicIndexURL
      publicStoreURL
    }
    localSearchCategories {
      publicIndexURL
      publicStoreURL
    }
  }
`

export default function Navbar() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchQuery, setSearchQuery] = useState("")
  const [blogsIndexStore, setBlogsIndexStore] = useState(null)
  const [categoriesIndexStore, setCategoriesIndexStore] = useState(null)
  const btnRef = React.useRef()
  const data = useStaticQuery(query)

  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlogs

  const {
    publicStoreURL: categoriesPublicStoreURL,
    publicIndexURL: categoriesPublicIndexURL,
  } = data.localSearchCategories

  const handleOnFocus = async () => {
    if (blogsIndexStore && categoriesIndexStore) return
    const [
      { data: blogsIndex },
      { data: blogsStore },
      { data: categoriesIndex },
      { data: categoriesStore },
    ] = await Promise.all([
      axios.get(blogsPublicIndexURL),
      axios.get(blogsPublicStoreURL),
      axios.get(categoriesPublicIndexURL),
      axios.get(categoriesPublicStoreURL),
    ])
    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    })
    setCategoriesIndexStore({
      index: categoriesIndex,
      store: categoriesStore,
    })
  }

  const setSearchValue = e => {
    e.preventDefault()
    setSearchQuery(e.target.value)
  }

  const resetValue = () => {
    setSearchQuery("")
    onClose()
  }
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
        </HStack>
      ) : (
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          variant="ghost"
          _hover={{ bg: "white" }}
          aria-label="Toggle Sidebar"
          icon={<AlignJustify fontSize="1.5rem" />}
        />
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Search</DrawerHeader>

          <DrawerBody>
            <Input
              value={searchQuery}
              // setValue={setSearchQuery}
              onFocus={handleOnFocus}
              onChange={e => setSearchValue(e)}
              placeholder="Type here..."
              focusBorderColor="blackAlpha.900"
              borderRadius="0"
              pr="4.5rem"
              border="1px solid"
              borderColor="blackAlpha.900"
              _placeholder={{ color: "blackAlpha.900" }}
            />
            {searchQuery && blogsIndexStore && categoriesIndexStore && (
              <SearchCard
                blogsIndexStore={blogsIndexStore}
                searchQuery={searchQuery}
                categoriesIndexStore={categoriesIndexStore}
                onClose={onClose}
                resetValue={resetValue}
              />
            )}
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
              onClick={onClose && resetValue}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  )
}
