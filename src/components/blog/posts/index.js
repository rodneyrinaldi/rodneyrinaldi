import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Post from "./post.js"

import * as S from "./styled"

const Blog = ({ children }) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostsList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              background
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
            }
            timeToRead
          }
        }
      }
    }`
  )

  const postList = allMarkdownRemark.edges

  return (
    <S.BlogWrapper>


      {postList.map(({
        node: {
          frontmatter: { category, date, description, title, background },
          timeToRead
        },
      }) => (
          <Post
            category={category}
            date={date}
            description={description}
            title={title}
            background={background}
            timetoread={timeToRead} />
        ))}


    </S.BlogWrapper>
  )
}

Blog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blog
