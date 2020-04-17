import React from "react"
import PropTypes from "prop-types"

import Filter from "./filter.js"
import Search from "./search.js"

import * as S from "./styled"
import "./style.css"

const BlogHeader = ({ children }) => {
  return (
    <S.BlogWrapper>
      <Search title="adv (0)" to="#" color="title-search-adv" />
      <Search title="dba (0)" to="#" color="title-search-dba" />
      <Search title="dev (0)" to="#" color="title-search-dev" />
      <Search title="dpo (0)" to="#" color="title-search-dpo" />
      <Search title="pmo (0)" to="#" color="title-search-pmo" />
      <Filter />
    </S.BlogWrapper>
  )
}

BlogHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogHeader
