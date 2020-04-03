import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children, title }) => {

  return (
    <>
      <GlobalStyles />
      <S.LayoutPage>
        <S.LayoutMain>{children}</S.LayoutMain>
      </S.LayoutPage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
