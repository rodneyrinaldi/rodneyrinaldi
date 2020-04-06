import React from "react"
import * as S from "./styled"
import Email from "./email"
import Arrow from "./arrow"

const Nav1 = () => {
  return (
    <>
      <S.Nav1Wrapper>
        <S.NavLink
          to="http://adv.rodneyrinaldi.com"
          title="adv.rodneyrinaldi.com"
          target="_blank" >adv</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink to="/" >dba</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink to="/" >dev</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink to="/" >dpo</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink to="/" >pmo</S.NavLink>
      </S.Nav1Wrapper>
      <S.ArrowWrapper>
        <S.ArrowLink to="#L1Areas"><Arrow /></S.ArrowLink>
      </S.ArrowWrapper>
      <S.EmailWrapper>
        <S.EmailLink to="#L3Contact"><Email /></S.EmailLink>
      </S.EmailWrapper>
    </>
  )
}

export default Nav1