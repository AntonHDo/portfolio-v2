/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Anton Do | Software Engineer`,
    name: `Anton Do`,
    siteURL: `https://chrisvo.dev/`,
    linkedInURL: `https://www.linkedin.com/in/chris-vo-/`,
    githubURL: `https://github.com/VoChrisK`,
    angellistURL: `https://angel.co/chris-vo-3`
  },
  plugins: [
    `gatsby-plugin-scroll-reveal-with-new-react`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    }
  ]
}
