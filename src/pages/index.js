import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Home from "../components/home/Home"
import L1Areas from "../components/home/L1Areas"
import L2Article from "../components/home/L2Article"
import L3Contact from "../components/home/L3Contact"

const IndexPage = () => (
  <Layout title="home">
    <SEO title="Home" />
    <Home>
      <L1Areas />
      <L2Article />
      <L3Contact />
    </Home>
  </Layout >
)

export default IndexPage
