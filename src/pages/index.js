import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"

import Home from "../components/home/Home"
import L1Areas from "../components/home/L1Areas"
import L2Article from "../components/home/L2Article"
import L3Contact from "../components/home/L3Contact"

import Header1 from "../components/Header1"
import Nav1 from "../components/Nav1"

import Footer from "../components/Footer"
import Authorship from "../components/Authorship"

const IndexPage = () => (
  <Layout title="home">
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
