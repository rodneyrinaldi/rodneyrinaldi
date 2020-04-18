import React from "react"
import PropTypes from "prop-types"

import Post from "./post.js"

import * as S from "./styled"

const Blog = ({ children }) => {
  return (
    <S.BlogWrapper>
      <Post type="adv" />
      <Post type="dba" />
      <Post type="dev" />
      <Post type="dpo" />
      <Post type="pmo" />
    </S.BlogWrapper>
  )
}

Blog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blog
