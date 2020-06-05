import React from "react"
import SEO from "../components/seo"
import Layout from "../components/wrapper"

import Header2 from "../components/header2"
import Nav2 from "../components/nav2"


import Footer from "../components/footer"
import Authorship from "../components/authorship"

const AdvocacyPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header2 />
    <Nav2 urlBack="/" />
    <h>Advocacy</h>
    <Footer />
    <Authorship />
  </Layout>
)

export default AdvocacyPage