import React from "react"
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
    <S.AreaWrapperLink to="/compliance">
      <S.IconWrapper fixed={areaImage.childImageSharp.fixed} className="foo" />
      <S.AreaWrapperTitle>Arquitetura, projetos e </S.AreaWrapperTitle>
      <S.AreaWrapperTitle>desenvolvimento  de  sistemas</S.AreaWrapperTitle>
    </S.AreaWrapperLink>
  </S.AreaWrapper>
}

export default AreaDev