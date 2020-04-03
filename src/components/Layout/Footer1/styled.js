import styled from "styled-components"
import { Link } from "gatsby"

export const Footer1Wrapper = styled.section`
  color: #aaa;
  display: flex;
  width: 100%;
  padding-top: 1.2rem;

  flex-direction: row;
  align-items: top;
  justify-content: space-around;
`

export const Footer1Sites = styled.div`
  font-family: 'Segoe UI', sans-serif;
  font-size: .8rem;
  text-align: left;
  margin-top: .8rem;
  margin-left: 4rem;
  width: 100%;
`
export const Footer1Midias = styled.div` 
  text-align: center;
  width: 600px;
`
export const Footer1Pages = styled.div`
  font-family: 'Segoe UI', sans-serif;
  font-size: .8rem;
  text-align: right;
  margin-top: .8rem;
  margin-right: 4rem;
  width: 100%;
`
export const Footer1Title = styled.h3`
  font-weight: 600;
  padding-bottom: .5rem;  
`
export const Footer1Link = styled(Link)`
  flex-direction: row;
  align-items: top;
  color: #aaa;
  text-decoration: none;
  transition: color .5s;
  line-height: 1.2rem;
  widht: 100%;

  &:hover {
    color: #fff;
  }
`