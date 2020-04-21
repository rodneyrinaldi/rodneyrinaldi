import React from "react"
import PropTypes from "prop-types"

import { ControllerJumpToStart } from '@styled-icons/entypo/ControllerJumpToStart';
import { ControllerFastBackward } from '@styled-icons/entypo/ControllerFastBackward';
import { ControllerFastForward } from '@styled-icons/entypo/ControllerFastForward';
import { ControllerNext } from '@styled-icons/entypo/ControllerNext';

import * as S from "./styled"

const Blog = ({ children }) => {
  return (
    <S.BlogWrapper>
      <S.ControlWrapper> <ControllerJumpToStart /> </S.ControlWrapper>
      <S.ControlWrapper> <ControllerFastBackward /> </S.ControlWrapper>
      <S.FilterWrapper>( 0 de 0 )</S.FilterWrapper>
      <S.ControlWrapper> <ControllerFastForward /> </S.ControlWrapper>
      <S.ControlWrapper> <ControllerNext /> </S.ControlWrapper>
    </S.BlogWrapper>
  )
}

Blog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blog
