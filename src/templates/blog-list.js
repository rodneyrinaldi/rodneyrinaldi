import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

import Header2 from "../components/header2"
import Nav2 from "../components/nav2"

import BlogHeader from "../components/blog/header"
import BlogFooter from "../components/blog/footer"

import Footer from "../components/footer"
import Authorship from "../components/authorship"

import Post from "../components/blog/posts/post"

import * as S from "../components/blog/posts/styled"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`
  const firstPage = `/blog/`
  const lastPage = `/blog/page/${numPages}`

  return (
    <Layout title="about">
      <SEO title="Home" />
      <Header2 />
      <Nav2 urlBack="/" />
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
      <BlogFooter
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
        firstPage={firstPage}
        lastPage={lastPage} />
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
