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
    `gatsby-plugin-mdx`
  ],
};
