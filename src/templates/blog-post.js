import React from "react"
import { graphql } from "gatsby"

import Header2 from "../components/Header2"
import Nav2 from "../components/Nav2"
import Footer from "../components/Footer"
import Authorship from "../components/Authorship"

import SEO from "../components/seo"
import Layout from "../components/Layout"

import Navigation from "../components/Post/Navigation.js"
import Comments from "../components/Post/Comments.js"
import PostWrapper from "./styled"
import * as S from "../components/Post/styled.js"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const previous = pageContext.nextPost
  const next = pageContext.previousPost

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Header2 />
      <Nav2 urlBack="/blog" />

      <PostWrapper>

        <S.PostHeader >
          <S.PostDate>
            {post.frontmatter.date} ­ - ­­­ {post.timeToRead} min para leitura
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

        <Navigation node={post} previous={previous} next={next} />
        <Comments />

      </PostWrapper>

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
      timeToRead,
      fields {
        slug
      }
    }
  }
`

export default BlogPost
