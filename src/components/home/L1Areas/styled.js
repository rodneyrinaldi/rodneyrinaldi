import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const L1AreasWrapper = styled.section`

  background: #FCFCFC;
  width: 100%;
  min-height: 25vh;
  
  display: flex;
  justify-content: center;
  `

export const AreaWrapper = styled.div`
    margin: 2rem;
    min-width: 250px;
    background: #FCFCFC;
  `

export const AreaWrapperTitle = styled.h1`
      color: #4F65E9;
    `

export const AreaWrapperLink = styled(Link)`
        color: #4F65E9;
        text-decoration: none;
      `

export const IconWrapper = styled(Img)`
  background: #FCFCFC;
`