import React from "react"
import { useFlexSearch } from "react-use-flexsearch"
import { Box, Text } from "@chakra-ui/react"

export default function SearchCard({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
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
    return <Text>No result found</Text>
  return (
    <>
      {blogsResult.length > 0 && (
        <>
          {blogsResult.map(result => {
            console.log(result)
            return <Box key={result.id}>{result.title}</Box>
          })}
        </>
      )}
    </>
  )
}

// 39
