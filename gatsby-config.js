/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:200,300,400,500,600,700,800,900`,
          `Oxygen\:300,400,700`,
          `Playfair Display\:600,700,800`,
          `Nanum Gothic Coding\:400,700`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-sass`,
  ],
}
