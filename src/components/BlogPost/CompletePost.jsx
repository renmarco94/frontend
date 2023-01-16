import React from "react"
import HeroPost from "./HeroPost"
import Post from "./Post"
import ShareButton from "./ShareButton"
import Tags from "./Tags"
import Author from "./Author"
import ReadNext from "./ReadNext"
import NewsLetter from "./NewsLetter"

export default function CompletePost({
  title,
  mainImage,
  excerpt,
  cat,
  blogPost,
  author,
  slugCat,
}) {
  return (
    <>
      <HeroPost title={title} mainImage={mainImage} excerpt={excerpt} />
      <Author author={author} header />
      <Post blogPost={blogPost} />
      <ShareButton />
      <Tags cat={cat} slugCat={slugCat} />
      <Author author={author} />
      <ReadNext />
      <NewsLetter />
    </>
  )
}
