import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const L1AreasWrapper = styled.section`

  background: #FCFCFC;
  width: 100%;
  
  display: flex;
  justify-content: center;
  `

export const AreaWrapper = styled.div`
    margin: 1rem;
    width: 20vh;
    background: #FCFCFC;

    @media(min-width: 800px) {
      min-width: 250px;
    }
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

export const Separator = styled.div`
  width: 3rem;
`