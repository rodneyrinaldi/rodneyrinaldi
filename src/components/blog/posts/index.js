import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Blog = ({ children }) => {
  return (
    <S.BlogWrapper>{children}</S.BlogWrapper>
  )
}

Blog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blog
