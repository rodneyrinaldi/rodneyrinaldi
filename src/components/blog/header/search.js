import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import "./style.css"

const Search = ({ title, color }) => {
  return (
    <S.SearchWrapper>
      <h1 className={color}>{title}</h1>
    </S.SearchWrapper>
  )
}

Search.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Search