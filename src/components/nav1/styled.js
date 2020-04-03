import styled from "styled-components"
import { Link } from "gatsby"

export const Nav1Wrapper = styled.section`
  color: #FFF;
  background: #283E4A;
  width: 100%;
  height: 8rem;
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const NavLink = styled(Link)`
  flex-direction: row;
  align-items: top;
  color: #aaa;
  text-decoration: none;
  transition: color .5s;
  line-height: 1rem;
  widht: 100%;

  &:hover {
    color: #fff;
  }
`

export const EmailWrapper = styled.section`
  color: #FFF;
  background: #283E4A;
  width: 100%;
  height: 7rem;
  padding-top: 2rem;
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const EmailLink = styled(Link)`
  flex-direction: row;
  align-items: top;
  color: #aaa;
  text-decoration: none;
  transition: color .5s;
  line-height: 1rem;
  widht: 100%;

  &:hover {
    color: #fff;
  }
`

export const ArrowDownWrapper = styled.section`
  color: #FFF;
  background: #283E4A;
  width: 100%;
  height: 10rem;
  padding-top: 7rem;
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ArrowDownLink = styled(Link)`
  flex-direction: row;
  align-items: top;
  color: #aaa;
  text-decoration: none;
  transition: color .5s;
  line-height: 1rem;
  widht: 100%;

  &:hover {
    color: #fff;
  }
`