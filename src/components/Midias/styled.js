import styled from "styled-components";

export const MidiaWapper = styled.nav`
  margin 3rem auto;
  widht: 100%;
`

export const MidiaLinkList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-left: 40px;
`

export const MidiaLinkItem = styled.li` 
`
export const MidiaLinkLink = styled.a`
  color #8899a6;
  text-decoration: none;
  transition: .5s;

  &:hover {
    color: #1fa1f2;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  color: #bbb;
  width: 30px;
  height: 30px;
`