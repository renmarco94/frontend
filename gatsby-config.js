require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const sanityConfig = require("./sanity-config")

module.exports = {
  siteMetadata: {
    title: `Marco Rendine Blog`,
    author: `Marco Rendine`,
    description: `Il mio blog dove parlo di nutrizione e allenamento`,
    twitterUsername: `@LucioRendine`,
    image: `/profilepic2.png`,
    icon: `/favicon.ico`,
    siteUrl: `https://mrnutrition.vercel.app`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if `false`, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {number} [portalZIndex=40]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
        portalZIndex: 40,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           siteUrl
    //         }
    //       }
    //       allSitePage {
    //         nodes {
    //           path
    //         }
    //       }
    //     }
    //     `,
    //     resolveSiteUrl: () => siteUrl,
    //     resolvePages: ({
    //       site: {
    //         siteMetadata: { siteUrl },
    //       },
    //       allSitePage: { nodes: allPosts },
    //     }) => {},
    //     serialize: ({ site, allSitePage }) => {
    //       return allSitePage.edges.map(edge => {
    //         const { node } = edge
    //         return {
    //           url: `${site.siteMetadata.siteUrl}${node.path}`,
    //           changefreq: "dayly",
    //           priority: 0.7,
    //         }
    //       })
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...sanityConfig,
        // projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        // dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
        // token: process.env.SANITY_TOKEN,
        // graphqlTag: "default",
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blogs`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityPost {
            nodes {
              id
              title
              categories {
                title
                id
                slug{
                  current
                }
              }
              slug {
                current
              }
              author {
                name
              }
            }
          }  
        }
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "categories", "slugcat", "slug", "author"],
        normalizer: ({ data }) =>
          data.allSanityPost.nodes.map(node => ({
            id: node.id,
            title: node.title,
            categories: node.categories[0].title,
            slugcat: node.categories[0].slug.current,
            slug: node.slug.current,
            author: node.author.name,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `categories`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityCategory {
          nodes{
            id
            title
          }
          }
        }
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title"],
        normalizer: ({ data }) =>
          data.allSanityCategory.nodes.map(node => ({
            id: node.id,
            title: node.title,
          })),
      },
    },
  ],
}
