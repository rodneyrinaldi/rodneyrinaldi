import React from "react"
import { Link } from "gatsby"

import * as S from "./styled"

const Nav2 = () => {
  return (
    <>
      <S.Nav2Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: '#4F65E9' }}>&lt; &ensp;&ensp;&ensp; <span>A  B  O  U T &ensp;&ensp;&ensp;&ensp;&ensp;</span></Link>
      </S.Nav2Wrapper>
    </>
  )
}

export default Nav2

