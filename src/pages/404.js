import React from "react"

import Layout from "../components/wrapper"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: NOT FOUND</h1>
    <p>You should hit a valid route</p>
  </Layout>
)

export default NotFoundPage
