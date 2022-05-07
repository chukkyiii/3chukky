import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const pageStyles = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  padding: "10px",
  textAlign: "center",
  // margin: "64px -109px -76px -3px"
}

const headingOne = {
  margin: "40px 0 10px",
  fontSize: "36px",
  lineHeight: "110%",
  fontWeight: "700",
  textTransform: "none"
}

// markup
// 404 page

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Not Found" >
      <div style={pageStyles}>
        <h1>404</h1>
        <h2>That page doesn't exist</h2>
        <div>It might have been moved.</div>
        <Link to="/">Go Home</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
