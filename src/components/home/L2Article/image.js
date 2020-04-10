import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const ArticleImage = () => {
  const { articleImage } = useStaticQuery(
    graphql`
    query {
      articleImage: file(relativePath: {eq: "justice.png"}) {
        childImageSharp {
          fixed(width: 180, height:180) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `
  )
  return <S.ImageWrapper fixed={articleImage.childImageSharp.fixed} className="foo" />
}

export default ArticleImage