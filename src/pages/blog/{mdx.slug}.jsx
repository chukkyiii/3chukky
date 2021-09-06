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

  //LS
}

const NP = {
  justifyContent: "center",
  display: "flex"
}

const BlogPost = ({ data }) => { 

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <div style = {NP}>
        <div style={blogStyle}>
          <MDXProvider
            components={{
              p: props => <p {...props} style={{ textAlign: "left" }} />,
              pre: props => <pre {...props} style={{ textAlign: "left" }} />
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