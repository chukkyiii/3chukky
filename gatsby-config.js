module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "3chukky",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `3chukky`,
        short_name: `3chukky`,
        start_url: `/`,
        background_color: `#242424`,
        theme_color: `#242424`,
        display: `standalone`,
        icon: `src/assets/icon.svg`
      },
    },
  ],
};
