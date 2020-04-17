import React from "react"
import PropTypes from "prop-types"

import Post from "./post.js"

import * as S from "./styled"

const Blog = ({ children }) => {
  return (
    <S.BlogWrapper>
      <Post />
      <Post />
      <Post />
      <Post />
    </S.BlogWrapper>
  )
}

Blog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blog
