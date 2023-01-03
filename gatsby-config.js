/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tommy Li`,
    description: `Tommy Li's personal website. Fullstack engineer based in Los Angeles, CA.`,
    author: `Tommy Li`,
    github: `tommyli10`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Tommy Li`,
    //     short_name: `Tommy Li`,
    //     start_url: `/`,
    //     background_color: `#383838`,
    //     theme_color: `#ffffff`,
    //     display: `minimal-ui`,
    //     icon: `src/icons/Logo_empty.png`
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `misc`,
    //     path: `${__dirname}/src/contents/misc`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/contents/projects`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        }
      }
    }
  ],
};
