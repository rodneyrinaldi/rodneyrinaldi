import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const L2Articles = ({ children }) => {
  return (
    <>
      <S.L2ArticleWrapper id='L2Articles'>
      </S.L2ArticleWrapper>
    </>
  )
}

L2Articles.propTypes = {
  children: PropTypes.node.isRequired,
}

export default L2Articles

