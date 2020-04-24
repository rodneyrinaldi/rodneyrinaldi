import React from "react"
import propTypes from "prop-types"

import { ControllerJumpToStart } from '@styled-icons/entypo/ControllerJumpToStart';
import { ControllerFastBackward } from '@styled-icons/entypo/ControllerFastBackward';
import { ControllerFastForward } from '@styled-icons/entypo/ControllerFastForward';
import { ControllerNext } from '@styled-icons/entypo/ControllerNext';

import * as S from "./styled"

const Footer = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage, firstPage, lastPage }) => (
  <S.BlogWrapper>
    {!isFirst && <S.ControlWrapper to={firstPage}> <ControllerJumpToStart /> </S.ControlWrapper>}
    {!isFirst && <S.ControlWrapper to={prevPage}><ControllerFastBackward /></S.ControlWrapper>}
    <S.FilterWrapper><p>( {currentPage} de {numPages} )</p></S.FilterWrapper>
    {!isLast && <S.ControlWrapper to={nextPage}> <ControllerFastForward /> </S.ControlWrapper>}
    {!isLast && <S.ControlWrapper to={lastPage}> <ControllerNext /> </S.ControlWrapper>}
  </S.BlogWrapper>
)

Footer.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
  firstPage: propTypes.string,
  lastPage: propTypes.string,
}

export default Footer
