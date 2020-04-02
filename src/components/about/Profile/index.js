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
      <S.ProfileTitle>{title}</S.ProfileTitle>
      <S.ProfilePosition>{position}</S.ProfilePosition>
      <S.ProfileDescription>{description}</S.ProfileDescription>
      <S.ProfileAuthor>{author}</S.ProfileAuthor>
    </S.ProfileWrapper>
  )
}

export default Profile