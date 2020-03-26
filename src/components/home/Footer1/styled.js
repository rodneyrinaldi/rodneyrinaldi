import styled from "styled-components"
import { Link } from "gatsby"

export const Footer1Wrapper = styled.section`
  color: #FCFCFC;
  display: flex;
  width: 100%;
  padding-top: 1.5rem;

  flex-direction: row;
  align-items: top;
  justify-content: space-around;
`

export const Footer1Sites = styled.div`
  font-family: 'Segoe UI', sans-serif;
  font-size: .8rem;
  text-align: left;
`
export const Footer1Midias = styled.div`
  padding-top: 1.5rem;  
  text-align: center;
`
export const Footer1Pages = styled.div`
  font-family: 'Segoe UI', sans-serif;
  font-size: .8rem;
  text-align: right;
`
export const Footer1Title = styled.h3`
  padding-bottom: .5rem;  
`
export const Footer1Link = styled(Link)`
  flex-direction: column;
  align-items: top;
  color: #fff;
  text-decorations: none;
  transition: color .5s;

  &:hover {
    color: #fff;
  }
`