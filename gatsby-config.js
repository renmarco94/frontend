require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const sanityConfig = require("./sanity-config")

module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
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
    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...sanityConfig,
        // projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        // dataset: `production`,
        // token: process.env.SANITY_TOKEN,
        // graphqlTag: "default",
      },
    },
  ],
}
