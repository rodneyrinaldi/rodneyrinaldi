import React from "react"
import { Link } from "gatsby"
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
    <Link to="/compliance">
      <S.IconWrapper fixed={areaImage.childImageSharp.fixed} className="foo" />
      <S.AreaWrapperTitle>Desenvolvimento da justiça,</S.AreaWrapperTitle>
      <S.AreaWrapperTitle>do direito e da cidadania</S.AreaWrapperTitle>
    </Link>
  </S.AreaWrapper >
}

export default AreaAdv