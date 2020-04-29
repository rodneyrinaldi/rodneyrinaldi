import React from "react"
import propTypes from "prop-types"

import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';

import * as S from "./styled"

const Navigation = ({ node, next, previous }) => (
  <S.NavigationWrapper>

    {previous && <S.NavigationControlWrapper to={previous.fields.slug}>
      {previous.frontmatter.title}
    </S.NavigationControlWrapper>}

    <S.NavigationControlWrapper to={node.fields.slug} >
      <S.NavigationIconControlWrapper>
        <ArrowIosUpwardOutline />
      </S.NavigationIconControlWrapper>
    </S.NavigationControlWrapper >

    {next && <S.NavigationControlWrapper to={next.fields.slug}>
      {next.frontmatter.title}
    </S.NavigationControlWrapper>}

  </S.NavigationWrapper >
)

Navigation.propTypes = {
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  }),
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  }),
}

export default Navigation

