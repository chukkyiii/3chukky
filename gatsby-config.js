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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/", { regex: "^/blog" }],
        height: 3,
        prependToBody: false,
        color: `orange`,
        footerHeight: 500,
        headerHeight: 0,
      },
    },
  ],
};


// Install List 
// gatsby-plugin-offline [ npm install gatsby-plugin-offline ]