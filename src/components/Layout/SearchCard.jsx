import React from "react"
import { useFlexSearch } from "react-use-flexsearch"
import { Flex, Text } from "@chakra-ui/react"
import { Link } from "gatsby"

export default function SearchCard({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  onClose,
  resetValue,
}) {
  console.log(blogsIndexStore, categoriesIndexStore)
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  )

  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store
  )

  if (blogsResult.length === 0 && categoriesResult.length === 0)
    return (
      <Text fontSize="xl" fontWeight="semibold" mt="4">
        No result found
      </Text>
    )
  return (
    <>
      {blogsResult.length > 0 && (
        <>
          {blogsResult.map(result => {
            return (
              <Flex flexDirection="column" mt={4} key={result.id}>
                <Link
                  onClick={onClose && resetValue}
                  to={`/blog/${result.slug}`}
                >
                  <Text as="h4" fontSize="xl" fontWeight="semibold">
                    {result.title}
                  </Text>
                </Link>
                <Link
                  onClick={onClose && resetValue}
                  to={`/blog/${result.slugcat}`}
                >
                  <Text fontSize="md">{result.categories}</Text>
                </Link>
              </Flex>
            )
          })}
        </>
      )}
    </>
  )
}
