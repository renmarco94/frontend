require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["blog-post", "category", "author"],
  singleTypes: [],
}

module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
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
  ],
}

// 99c6d713248a4646aab75061e6598c8d05fcf2fcf98a26e44ba00fd130590bb92f359419b872e00a132622dbff2b20a7b1b397c40e92cc29b27f35a1d13f76cc52117aab5269719dffcd34c242d4310e00c2f25c26aecd249d4e8cdfe4cbb429ca45353182efb5427ff9fe68628f0ecdc39eae0ea5cc3ab1d96ba02d34f5c049
