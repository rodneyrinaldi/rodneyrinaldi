import React from "react"
import * as S from "./styled"

const Nav1 = () => {
  return (
    <>
      <S.Nav1Wrapper>
        <S.NavLink to="/" >adv</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink to="/" >dba</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink to="/" >dev</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink to="/" >dpo</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink to="/" >pmo</S.NavLink>
      </S.Nav1Wrapper>
      <S.EmailWrapper>
        <S.EmailLink to="/">XXX</S.EmailLink>
      </S.EmailWrapper>
      <S.ArrowDownWrapper>
        <S.ArrowDownLink to="/">XXX</S.ArrowDownLink>
      </S.ArrowDownWrapper>
    </>
  )
}

export default Nav1