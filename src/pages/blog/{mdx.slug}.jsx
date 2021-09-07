import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import Layout from '../../components/layout'

const blogStyle = {
  marginTop: "0px",
  marginRight: "64px",
  marginBottom: "0px",
  marginLeft: "64px",

  maxWidth: "680px",
  minWidth: "0",
  width: "100%"

}

const NP = {
  justifyContent: "center",
  display: "flex"
}

const codeStyle = {
  display: "block none !important",
  fontSize: "100%",
  lineHeight: "1.5",
  float: "left",
  minWidth: "100%",
  paddingTop: "0px",
  paddingRight: "1.5rem",
  paddingBottom: "0px",
  paddingLeft: "1.5rem"
}


const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div style={NP}>
        <div style={blogStyle}>
          <p>{data.mdx.frontmatter.date}</p>
          <br />
          <MDXProvider
            components={{
              p: props => <p {...props} style={{ textAlign: "left" }} />,
              pre: props => <pre {...props}
                style={codeStyle}
              />,
              code: props => <code {...props}
                style={codeStyle}
              />
            }}
          >
            <MDXRenderer >
              {data.mdx.body}
            </MDXRenderer>
          </MDXProvider>
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