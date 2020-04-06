import React from "react"

import AreaAdv from "./AreaAdv"
import AreaDpo from "./AreaDpo"
import AreaDev from "./AreaDev"
import * as S from "./styled"

const L1Areas = () => {
  return (
    <>
      <S.L1AreasWrapper id='L1Areas'>
        <AreaAdv />
        <AreaDpo />
        <AreaDev />
      </S.L1AreasWrapper>
    </>
  )
}

export default L1Areas

