import styled from "styled-components"
import Img from "gatsby-image"

export const L2ArticleWrapper = styled.section`
  display: #FCFCFC;
  background: #283E4A;
  width: 100%;
  min-height: 40vh;
  padding-top: 3rem;
  padding-right: 5rem;
  padding-bottom: 3rem;
  padding-left: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;  
  justify-content: center;
`

export const L2Article = styled.div`
  display: #283E4A;
  background: #FCFCFC;
  margin: 1rem;
  min-height: 60vh;
  min-width: 40vh;
`

export const L2Image = styled(Img)`
  color: #283E4A;
  background: #FCFCFC;
  display: flex;
  align: center;
  margin: 2rem;
`

export const ImageWrapper = styled(Img)`
  color: #283E4A;
  background: #FCFCFC;
  display: flex;
  align: left;
  margin: .1rem;
`