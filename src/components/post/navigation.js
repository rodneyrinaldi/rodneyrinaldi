import React from "react"
import propTypes from "prop-types"

import { ControllerFastBackward } from '@styled-icons/entypo/ControllerFastBackward';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';
import { ControllerFastForward } from '@styled-icons/entypo/ControllerFastForward';

import * as S from "./styled"

const Navigation = ({ slug, isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.NavigationWrapper>
    {!isFirst && <S.NavigationControlWrapper to={prevPage}>
      <ControllerFastBackward />
    </S.NavigationControlWrapper>}
    <S.NavigationControlWrapper to={slug} >
      <ArrowIosUpwardOutline />
    </S.NavigationControlWrapper>
    {!isLast && <S.NavigationControlWrapper slug={nextPage}>
      <ControllerFastForward />
    </S.NavigationControlWrapper>}
  </S.NavigationWrapper>
)

Navigation.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Navigation

