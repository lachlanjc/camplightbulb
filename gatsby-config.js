module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Camp Lightbulb',
        short_name: 'Camp Lightbulb',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#ff006a',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline'
  ]
}
