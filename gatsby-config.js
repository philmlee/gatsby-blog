module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "I'd Rather Be Dev",
  },
  plugins: [  "gatsby-plugin-image",
    "gatsby-plugin-sharp",
      {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }],
};
