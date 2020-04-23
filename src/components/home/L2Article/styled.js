import { Link } from "gatsby"
import styled from "styled-components"

export const L2ArticleWrapper = styled.section`
  display: #FCFCFC;
  background: #283E4A;
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;  
  justify-content: center;
`

export const L2Article = styled(Link)`
  color: #283E4A;
  background: #FCFCFC;
  margin: 1rem;
  min-height: 60vh;
  min-width: 50vh;
  height: 60vh;
  width: 50vh;
  text-decoration: none;
`

export const L2ArticleTitle = styled.h1`
  margin-top: 1rem; 
  font-weight: 500;
`

export const L2ArticleDate = styled.h2`
  margin-top: 1rem; 
  font-weight: 300;
`

export const L2ArticleTimeRead = styled.h2`
  margin-top: 1rem; 
  font-weight: 300;
`

export const L2ArticleText = styled.div`
  margin-top: 1rem; 
  height: 10%;
`

export const BlogLink = styled(Link)`
  position: absolute;
  margin-top: 1.5rem;

  color: #aaa;
  text-decoration: none;
  transition: color .5s;
  widht: 100%;

  &:hover {
    color: #283E4A;
  }
`
