import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Home = ({ children }) => {
  return (
    <>
      <S.HomeWrapper>{children}</S.HomeWrapper>
    </>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home

