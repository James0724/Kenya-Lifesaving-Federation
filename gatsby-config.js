require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:200,300,400,500,600,700,800,900`,
          `Oxygen\:300,400,700`,
          `Playfair Display\:400,500,700,800`,
          `Roboto\:600,700,900`,
          `Nanum Gothic Coding\:400,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
