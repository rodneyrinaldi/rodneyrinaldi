import React from "react"
import * as S from "./styled"
import EmailIcon from "./email"
import BlogIcon from "./blog"
import Arrow from "./arrow"

const Nav1 = () => {
  return (
    <>
      <S.Nav1Wrapper>
        <S.NavLink
          href="http://adv.rodneyrinaldi.com"
          title="adv.rodneyrinaldi.com"
          // target="_blank"
          rel="noopener noreferrer">adv</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink
          href="http://dba.rodneyrinaldi.com"
          title="dba.rodneyrinaldi.com"
          rel="noopener noreferrer">dba</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink
          href="http://dev.rodneyrinaldi.com"
          title="dev.rodneyrinaldi.com"
          rel="noopener noreferrer">dev</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink
          href="http://dpo.rodneyrinaldi.com"
          title="dpo.rodneyrinaldi.com"
          rel="noopener noreferrer">dpo</S.NavLink>
        <spn>&nbsp;&nbsp;|&nbsp;&nbsp;</spn>
        <S.NavLink
          href="http://pmo.rodneyrinaldi.com"
          title="pmo.rodneyrinaldi.com"
          rel="noopener noreferrer">pmo</S.NavLink>
      </S.Nav1Wrapper>
      <S.MessageWrapper>
        <S.EmailLink to="#L3Contact"><EmailIcon /></S.EmailLink>
        <S.BlogLink to="/blog"><BlogIcon /></S.BlogLink>
      </S.MessageWrapper>
      <S.ArrowWrapper>
        <S.ArrowLink to="#L1Areas"><Arrow /></S.ArrowLink>
      </S.ArrowWrapper>
    </>
  )
}

export default Nav1