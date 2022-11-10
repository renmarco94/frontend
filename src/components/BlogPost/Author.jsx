import React from "react"
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  ButtonGroup,
  Text,
} from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai"

export default function Author({ header }) {
  const data = useStaticQuery(graphql`
    query MyAuthorQuery {
      allStrapiAuthor {
        nodes {
          Bio
          Name
          id
          Avatar {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const author = data.allStrapiAuthor.nodes
  return (
    <Box
      p={{ base: "25px 12.5px 0 12.5px", md: "25px 0 0 0" }}
      m="0 auto"
      mt="25px"
      mb="50px"
      maxW="640px"
      borderTop={header ? "1px solid" : "1px dotted"}
      borderColor="blackAlpha.900"
    >
      {author.map(item => {
        return (
          <Flex alignItems="center" key={item.id}>
            <Avatar
              size={header ? "lg" : "xl"}
              mr="12.5px"
              name={item.Name}
              src={
                item.Avatar.localFile.childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
            />
            {header ? (
              <>
                <Flex flexDirection="column" justifyContent="center">
                  <Box
                    fontSize={{ base: "13px", md: "16px" }}
                    fontWeight="bold"
                  >
                    {item.Name.toUpperCase()}
                  </Box>
                  <Box
                    fontSize={{ base: "13px", md: "16px" }}
                    fontWeight="regular"
                  >
                    Apr 15, 2020 · 4 min read
                  </Box>
                </Flex>
                <ButtonGroup ml="auto">
                  <IconButton
                    aria-label="Instagram"
                    size="lg"
                    color="blackAlpha.900"
                    bg="white"
                    border="2px solid"
                    borderColor="gray.100"
                    icon={<AiFillInstagram fontSize="20px" />}
                  />
                  <IconButton
                    aria-label="Linkedin"
                    bg="white"
                    border="2px solid"
                    borderColor="gray.100"
                    size="lg"
                    color="blackAlpha.900"
                    icon={<AiFillLinkedin fontSize="20px" />}
                  />
                  <IconButton
                    aria-label="Twitter"
                    bg="white"
                    border="2px solid"
                    borderColor="gray.100"
                    size="lg"
                    color="blackAlpha.900"
                    icon={<AiOutlineTwitter fontSize="20px" />}
                  />
                </ButtonGroup>
              </>
            ) : (
              <Box>
                <Text
                  as="span"
                  fontWeight="bold"
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  {item.Name} &nbsp;
                </Text>
                <Text
                  as="span"
                  fontSize={{ base: "14px", md: "16px" }}
                  fontWeight="medium"
                >
                  is a {item.Bio}
                </Text>
              </Box>
            )}
          </Flex>
        )
      })}
    </Box>
  )
}

// item.Cover.localFile.childImageSharp.gatsbyImageData.images.fallback.src
