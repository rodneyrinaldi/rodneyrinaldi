import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const AreaDev = () => {
  const { areaImage } = useStaticQuery(
    graphql`
      query {
        areaImage: file(relativePath: {eq: "area-dev.png"}) {
          childImageSharp {
            fixed(width: 180, height:180) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )
  return <S.AreaWrapper>
    <Link to="/compliance">
      <S.IconWrapper fixed={areaImage.childImageSharp.fixed} className="foo" />
      <S.AreaWrapperTitle>Arquitetura, desenvolvimento e </S.AreaWrapperTitle>
      <S.AreaWrapperTitle>projeto  de  sistemas</S.AreaWrapperTitle>
    </Link>
  </S.AreaWrapper>
}

export default AreaDev