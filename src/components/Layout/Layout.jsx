import React from "react"
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react"
import Navbar from "./Navbar"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/400-italic.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import Footer from "./Footer"

const theme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
  colors: {
    brand: {
      Gray: "#E5E5E5",
      Black: "#000000",
    },
  },
})

export default function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Box overflowX="hidden">
        <Navbar />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
