import React from "react"
import { Link } from "gatsby"

import * as S from "./styled"

const Nav1 = () => {
  return (
    <>
      <S.Nav1Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>adv</Link>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>dba</Link>
      </S.Nav1Wrapper>
    </>
  )
}

export default Nav1