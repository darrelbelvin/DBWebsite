require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Darrel Belvin",
    author: "Darrel Belvin",
    description: "Portfolio Website for Darrel Belvin"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Darrel's Dev & Design",
        short_name: 'Dtothe3',
        start_url: '/',
        background_color: '#1c1c1c',
        theme_color: '#1c1c1c',
        display: 'minimal-ui',
        icon: 'src/images/D-cubed Logo black.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
