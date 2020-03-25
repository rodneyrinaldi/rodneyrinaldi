import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description, author },
    },
  } = useStaticQuery(graphql`
    query ProfileQuery {
      site {
        siteMetadata {
          title
          position
          description
          author
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper className="Profile-wrapper">
      <h1>{title}</h1>
      <h2>{position}</h2>
      <h2>{description}</h2>
      <h2>{author}</h2>
    </S.ProfileWrapper>
  )
}

export default Profile