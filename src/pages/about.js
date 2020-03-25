import React from "react"

import Layout from "../components/Layout"
import About from "../components/about/About"
import Avatar from "../components/about/Avatar"
import Profile from "../components/about/Profile"

const AboutPage = () => (
  <Layout title="about">
    <About>
      <Avatar />
      <Profile />
    </About>
  </Layout>
)

export default AboutPage