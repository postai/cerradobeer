module.exports = {
  pathPrefix: "/",
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
        start_url: '/',
        background_color: '#A7A8AA',
        theme_color: '#A7A8AA',
        display: 'minimal-ui',
        icon: 'src/assets/images/cerradobeer-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130185598-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        //anonymize: true,
        // Setting this parameter is also optional
        //respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        //cookieDomain: "example.com",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}