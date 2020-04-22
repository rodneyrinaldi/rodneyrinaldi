

import Header2 from "../components/Header2"
import Nav2 from "../components/Nav2"

import BlogHeader from "../components/blog/header"
import BlogPosts from "../components/blog/posts"
import BlogFooter from "../components/blog/footer"

import Footer from "../components/Footer"
import Authorship from "../components/Authorship"




import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark (fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      },
      html
    }
  }
`

export default BlogPost
