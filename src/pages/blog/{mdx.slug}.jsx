import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import Layout from '../../components/layout'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Donation from '../../components/donation'

const blogStyle = {
  marginTop: "0px",
  marginRight: "64px",
  marginBottom: "0px",
  marginLeft: "64px",

  maxWidth: "680px",
  minWidth: "0",
  width: "100%",
  // justifyContent: "center",
  // display: "flex"
  // gLITCH

}

const NP = {
  justifyContent: "center",
  display: "flex"

}

const codeStyle = {
  display: "block none",
  fontSize: "100%",
  lineHeight: "1.5",
  float: "left",
  overflowX: "auto",
  width: "100%",
  minWidth: "100%",
  paddingTop: "1.5rem",
  paddingRight: "1.5rem",
  paddingBottom: "1.5rem",
  paddingLeft: "1.5rem",
  marginBottom: "9px",
  border: "1px solid #707070",
  borderRadius: "1px"
}

const heading = {
  fontSize: "60px",
  fontFamily: "'Roboto', monospace",
}

const headingStyle = {
  paddingTop: "9px",
  paddingBottom: "18px",
  fontFamily: "'Roboto', monospace",
}

const BlogPost = ({ data }) => {
  const { windowWidth } = useWindowDimensions();
  const bool = Boolean(windowWidth >= 600)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div style={bool ? NP : null}>
        <div style={bool ? blogStyle : null}>
          <p>{data.mdx.frontmatter.date}</p>
          <h1 style={bool ? heading : null}>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.alt}</p>
          <br />
          <MDXProvider
            components={{
              h2: props => <h2 {...props}
                style={bool ? headingStyle : null}
              />,
              h3: props => <h3 {...props}
                style={bool ? headingStyle : null}
              />,
              p: props => <p {...props}
                style={bool ?
                  {
                    textAlign: "left",
                  } : null
                }
              />,
              a: props => <a {...props}
                style={{
                  color: "orange"
                }}
              />,
              code: props => <code {...props}
                style={codeStyle}
              />,
            }}
          >
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </MDXProvider>
          <Donation />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        alt
      }
      body
    }
  }
`

export default BlogPost


// run ```gatsby Clean```
// then ```gatsby develop```

// This helps create new pages since it throughs errors 
// every time you delete or change the name of a folder. 

// export const query = graphql`
//   query MyQuery($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//         featuredImage {
//           childImageSharp {
//             fluid(maxWidth: 1700) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         alt
//       }
//       body
//     }
//   }
// `