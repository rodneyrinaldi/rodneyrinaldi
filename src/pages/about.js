import React from "react"
import SEO from "./src/components/seo"
import Layout from "./src/components/layout"

import About from "./src/components/about/About"
import Avatar from "./src/components/about/Avatar"
import Profile from "./src/components/about/Profile"

import Header2 from "./src/components/header2"
import Nav2 from "./src/components/nav2"


import Footer from "./src/components/footer"
import Authorship from "./src/components/authorship"

const AboutPage = () => (
  <Layout title="about">
    <SEO title="Home" />
    <Header2 />
    <Nav2 urlBack="/" />
    <About>
      <Avatar />
      <Profile />
    </About>
    <Footer />
    <Authorship />
  </Layout>
)

export default AboutPage