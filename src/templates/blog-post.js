import React from "react"
import { graphql } from "gatsby"

import Header2 from "../components/header2"
import Nav2 from "../components/nav2"
import Footer from "../components/footer"
import Authorship from "../components/authorship"

import SEO from "../components/seo"
import Layout from "../components/layout"

import Navigation from "../components/post/navigation.js"
import Comments from "../components/post/comments.js"
import PostWrapper from "./styled"
import * as S from "../components/post/styled.js"

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
        <Comments url={post.fields.slug} title={post.frontmatter.title} />

      </PostWrapper>

      <Footer />
      <Authorship />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark (fields: {slug: {eq: $slug}}) {
      fields {
        slug
      },
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
