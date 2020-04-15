import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"

import Header2 from "../components/Header2"
import Nav2 from "../components/Nav2"


import Footer from "../components/Footer"
import Authorship from "../components/Authorship"

const BlogPage = () => (
  <Layout title="about">
    <SEO title="Home" />
    <Header2 />
    <Nav2 />

    <Footer />
    <Authorship />
  </Layout>
)

export default BlogPage