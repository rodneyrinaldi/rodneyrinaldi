import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"

import Header2 from "../components/Header2"
import Nav2 from "../components/Nav2"

import BlogHeader from "../components/blog/header"
import BlogPosts from "../components/blog/posts"
import BlogFooter from "../components/blog/footer"

import Footer from "../components/Footer"
import Authorship from "../components/Authorship"

const BlogPage = () => (
  <Layout title="about">
    <SEO title="Home" />
    <Header2 />
    <Nav2 />

    <BlogHeader />
    <BlogPosts />
    <BlogFooter />

    <Footer />
    <Authorship />
  </Layout>
)

export default BlogPage