import React from "react"
import PropTypes from "prop-types"

import Header1 from "../Home/Header1"
import Header2 from "../Home/Header2"
import Nav1 from "../Home/Nav1"
import Nav2 from "../Home/Nav2"
import Footer1 from "../Home/Footer1"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"



const Layout = ({ children, title }) => {

  return (
    <>
      <S.LayoutPage>
        <S.LayoutHeader>
          <GlobalStyles />
          {title === 'home' &&
            <Header1 />
          }
          {title !== 'home' &&
            <Header2 />
          }
        </S.LayoutHeader>
        <S.LayoutNav>
          {title === 'home' &&
            <Nav1 />
          }
          {title !== 'home' &&
            <Nav2 />
          }
        </S.LayoutNav>
        <S.LayoutMain>{children}</S.LayoutMain>
        <S.LayoutFooter>
          <Footer1 />
        </S.LayoutFooter>
        <S.LayoutAuthorship>
          Rodney Rinaldi | 2020 | Todos os direitos reservados
        </S.LayoutAuthorship>
      </S.LayoutPage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
