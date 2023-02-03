import React from "react"
import HeroPost from "./HeroPost"
import Post from "./Post"
import Tags from "./Tags"
import Author from "./Author"
import ReadNext from "./ReadNext"
import NewsLetter from "./NewsLetter"
import ShareFooter from "./ShareFooter"

export default function CompletePost({
  title,
  mainImage,
  excerpt,
  cat,
  blogPost,
  author,
  slugCat,
  slug,
}) {
  return (
    <>
      <HeroPost title={title} mainImage={mainImage} excerpt={excerpt} />
      <Author
        author={author}
        header
        title={title}
        description={excerpt}
        url={`https://mrnutrition.vercel.app/blog/${slug}`}
      />
      <Post blogPost={blogPost} />
      <ShareFooter
        title={title}
        description={excerpt}
        url={`https://mrnutrition.vercel.app/blog/${slug}`}
      />
      <Tags cat={cat} slugCat={slugCat} />
      <Author author={author} />
      <ReadNext />
      <NewsLetter />
    </>
  )
}
