import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const About = ({ children }) => {
  return (
    <>
      <S.AboutWrapper>{children}</S.AboutWrapper>
    </>
  )
}

About.propTypes = {
  children: PropTypes.node.isRequired,
}

export default About

