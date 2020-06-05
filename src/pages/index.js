import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

import Home from "../components/home/Home"
import L1Areas from "../components/home/L1Areas"
import L2Article from "../components/home/L2Article"
import L3Contact from "../components/home/L3Contact"

import Header1 from "../components/header1"
import Nav1 from "../components/nav1"

import Footer from "../components/footer"
import Authorship from "../components/authorship"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header1 />
    <Nav1 />
    <Home>
      <L1Areas />
      <L2Article />
      <L3Contact />
    </Home>
    <Footer />
    <Authorship />
  </Layout >
)

export default IndexPage
