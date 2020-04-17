import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Blog = ({ children }) => {
  return (
    <S.BlogWrapper>
      <S.PostWrapper>xxxxx</S.PostWrapper>
      <S.PostWrapper>yyy</S.PostWrapper>
    </S.BlogWrapper>
  )
}

Blog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blog
