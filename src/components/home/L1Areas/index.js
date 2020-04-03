import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const L1Areas = ({ children }) => {
  return (
    <>
      <S.L1AreasWrapper>
        <div style={{ height: 300 }}>L1Areas</div>
      </S.L1AreasWrapper>
    </>
  )
}

L1Areas.propTypes = {
  children: PropTypes.node.isRequired,
}

export default L1Areas

