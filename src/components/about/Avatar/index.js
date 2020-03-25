import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: {eq: "profile-me.png"}) {
          childImageSharp {
            fixed(width: 180, height:180) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )
  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} className="foo" />
}

export default Avatar