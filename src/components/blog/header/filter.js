import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import "./style.css"

const Filter = ({ children }) => {
  return (
    <S.SearchWrapper>
      <input type="input" placeholder="pesquisar por ..." />
    </S.SearchWrapper>
  )
}

Filter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Filter