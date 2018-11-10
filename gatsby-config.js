module.exports = {
  pathPrefix: "/cerradobeer",
  siteMetadata: {
    title: "Cerrado Beer",
    author: "Postai",
    description: "A cerveja artesanal do cerrado"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cerrado Beer',
        short_name: 'Cerrado Beer',
        start_url: '/cerradobeer',
        background_color: '#A7A8AA',
        theme_color: '#A7A8AA',
        display: 'minimal-ui',
        icon: 'src/assets/images/cerradobeer-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
