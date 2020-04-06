import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const L3Contact = ({ children }) => {
  return (
    <>
      <S.L3ContactWrapper id='L3Contact'>
      </S.L3ContactWrapper>
    </>
  )
}

L3Contact.propTypes = {
  children: PropTypes.node.isRequired,
}

export default L3Contact

