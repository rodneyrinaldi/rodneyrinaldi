import React from "react"
import { Link } from "gatsby"
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
      <S.AreaWrapperTitle>Consultoria em privacidade de </S.AreaWrapperTitle>
      <S.AreaWrapperTitle>dados e conformidade</S.AreaWrapperTitle>
    </S.AreaWrapperLink>
  </S.AreaWrapper>
}

export default AreaDpo