import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import About from "../components/about/About"
import Avatar from "../components/about/Avatar"
import Profile from "../components/about/Profile"

import Header2 from "../components/header2"
import Nav2 from "../components/nav2"


import Footer from "../components/footer"
import Authorship from "../components/authorship"

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