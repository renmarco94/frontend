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
      allStrapiBlogPost(sort: { order: ASC, fields: Date }) {
        nodes {
          Date
          Time
          Title
          category {
            Category
          }
          childStrapiBlogPostPostTextnode {
            childMarkdownRemark {
              excerpt
              html
            }
          }
          Cover {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      allStrapiCategory {
        nodes {
          Category
          id
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const { createPage } = actions

  const posts = result.data.allStrapiBlogPost.nodes
  const categories = result.data.allStrapiCategory.nodes

  // posts.forEach(blogPost => {
  //   createPage({
  //     path: `/blogs/${blogPost.slug.current}`,
  //     component: singleBlogTemplate,
  //     context: { id: blogPost.id },
  //   })
  // })

  categories.forEach(cat => {
    createPage({
      path: `/blog/${cat.Category}`,
      component: blogCategoryTemplate,
      context: { id: cat.id, cat: cat.Category },
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
