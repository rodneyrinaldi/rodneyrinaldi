import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"

import Header2 from "../components/Header2"
import Nav2 from "../components/Nav2"

import BlogHeader from "../components/blog/header"
import BlogFooter from "../components/blog/footer"

import Footer from "../components/Footer"
import Authorship from "../components/Authorship"

import Post from "../components/blog/posts/post"

import * as S from "../components/blog/posts/styled"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  return (
    <Layout title="about">
      <SEO title="Home" />
      <Header2 />
      <Nav2 />
      <BlogHeader />
      <S.BlogWrapper>
        {postList.map(({
          node: {
            frontmatter: { category, date, description, title },
            timeToRead,
            fields: { slug }
          },
        }) => (
            <Post
              slug={slug}
              category={category}
              date={date}
              description={description}
              title={title}
              timetoread={timeToRead} />
          ))}
      </S.BlogWrapper>
      <BlogFooter />
      <Footer />
      <Authorship />
    </Layout>
  )
}

export const query = graphql`
  query postList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
        limit: $limit
        skip: $skip
      ) {
      edges {
        node {
          frontmatter {
            category
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            title
          }
          timeToRead,
          fields {slug}
        }
      }
    }
  }
`

export default BlogList
