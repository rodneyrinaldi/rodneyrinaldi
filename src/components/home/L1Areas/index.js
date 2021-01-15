import React from "react"

import AreaAdv from "./areaadv"
import AreaDpo from "./areadpo"
import AreaDev from "./areadev"
import * as S from "./styled"

const L1Areas = () => {
  return (
    <>
      <S.L1AreasWrapper id='L1Areas'>
        <AreaAdv />
        <S.Separator />
        <AreaDev />
        <S.Separator />
        <AreaDpo />
      </S.L1AreasWrapper>
    </>
  )
}

export default L1Areas

