import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import useWindowDimensions from '../../hooks/useWindowDimensions';

const listStyle = {
  position: "absolute",
  left : "50%",
  top : "50%",
  transform : "translate(-50%, -50%)",
  padding : "10px",
  // margin: "64px -109px -76px -3px"
}

const BlogPage = ({ data }) => {
  const { windowWidth } = useWindowDimensions();
  const bool = Boolean(windowWidth >= 600)
  return (
    <Layout pageTitle="Bløg.">
      <div style={bool ? listStyle : null}>
        <div>
          {
            data.allMdx.nodes.map(node => (
              <div key={node.id}>
                <p>
                  Posted: {node.frontmatter.date}
                </p>
                <Link to={`/blog/${node.slug}`}>
                  <h2>
                    {node.frontmatter.title}
                  </h2>
                  <p>
                    {node.frontmatter.alt}
                  </p>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          alt
        }
        id
        slug
      }
    }
  }
`

export default BlogPage