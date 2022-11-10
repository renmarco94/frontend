import React from "react"
import Pagination from "./Pagination"
import PostsList from "./PostsList"

export default function BlogHomepage({ posts, currentPage, numberOfPages }) {
  return (
    <>
      <PostsList title="All articles" posts={posts} />
      <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
    </>
  )
}
