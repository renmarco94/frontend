const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const blogHomeTemplate = require.resolve("./src/templates/BlogHome.jsx")
  const blogCategoryTemplate = require.resolve(
    "./src/templates/BlogCategory.jsx"
  )
  const singleBlogTemplate = require.resolve("./src/templates/SinglePost.jsx")

  const postsPerPage = 4

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          title
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          title
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          slug {
            current
          }
          name
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const { createPage } = actions

  const posts = result.data.allSanityPost.nodes
  const categories = result.data.allSanityCategory.nodes

  posts.forEach(blogPost => {
    createPage({
      path: `/blog/${blogPost.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blogPost.slug.current },
    })
  })

  categories.forEach(cat => {
    createPage({
      path: `/blog/${cat.slug.current}`,
      component: blogCategoryTemplate,
      context: { id: cat.id, cat: cat.title },
    })
  })

  const totalPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: totalPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/blog" : `/blog/${index + 1}`,
      component: blogHomeTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalPages,
        currentPage: index + 1,
      },
    })
  })
}
