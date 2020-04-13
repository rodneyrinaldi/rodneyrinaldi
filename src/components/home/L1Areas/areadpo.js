import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const AreaDpo = () => {
  const { areaImage } = useStaticQuery(
    graphql`
      query {
        areaImage: file(relativePath: {eq: "area-pdo.png"}) {
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
      <S.AreaWrapperTitle>Conformidade, privacidade,</S.AreaWrapperTitle>
      <S.AreaWrapperTitle>segrança e proteção de dados</S.AreaWrapperTitle>
    </S.AreaWrapperLink>
  </S.AreaWrapper>
}

export default AreaDpo