import React from "react"
import HeroPost from "./HeroPost"
import Post from "./Post"
import ShareButton from "./ShareButton"
import Tags from "./Tags"
import Author from "./Author"
import ReadNext from "./ReadNext"
import NewsLetter from "./NewsLetter"

export default function CompletePost() {
  return (
    <>
      <HeroPost />
      <Author header />
      <Post />
      <ShareButton />
      <Tags />
      <Author />
      <ReadNext />
      <NewsLetter />
    </>
  )
}
