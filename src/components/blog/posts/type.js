import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import "./style.css"

const Type = ({ children }) => {
  return (
    <S.SearchWrapper>
      <input type="input" placeholder="pesquisar por ..." />
    </S.SearchWrapper>
  )
}

Type.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Type