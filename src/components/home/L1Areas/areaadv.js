import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const AreaAdv = () => {
  const { areaImage } = useStaticQuery(
    graphql`
      query {
        areaImage: file(relativePath: {eq: "area-adv.png"}) {
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
      <S.AreaWrapperTitle>Direito, deveres e</S.AreaWrapperTitle>
      <S.AreaWrapperTitle>exercício da cidadania</S.AreaWrapperTitle>
    </S.AreaWrapperLink>
  </S.AreaWrapper >
}

export default AreaAdv