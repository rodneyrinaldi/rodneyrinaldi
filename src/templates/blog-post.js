import React from "react"
import { graphql } from "gatsby"

import Header2 from "../components/Header2"
import Nav2 from "../components/Nav2"
import Footer from "../components/Footer"
import Authorship from "../components/Authorship"

import SEO from "../components/seo"
import Layout from "../components/Layout"

import * as S from "../components/Post/styled.js"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Header2 />
      <Nav2 />

      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.PostDate} : {post.frontmatter.timeToRead} min para leitura
        </S.PostDate>
        <S.PostTitle>
          {post.frontmatter.title}
        </S.PostTitle>
        <S.PostDescription>
          {post.frontmatter.PostDescription}
        </S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>

      <Footer />
      <Authorship />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark (fields: {slug: {eq: $slug}}) {
      frontmatter {
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        description
        title
      },
      html
      timeToRead
    }
  }
`

export default BlogPost
