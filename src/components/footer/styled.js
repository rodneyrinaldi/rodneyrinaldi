import styled from "styled-components"

export const FooterWrapper = styled.section`
  color: #FCFCFC;
  background: #111A1E;
  display: flex;
  height: 10rem;
  width: 100%;
  padding-top: .5rem;

  flex-direction: row;
  justify-content: space-around;
`

export const FooterSites = styled.div`
  font-family: 'Segoe UI', sans-serif;
  font-size: .8rem;
  text-align: left;
  margin-top: .8rem;
  margin-left: 4rem;
  width: 100%;

  @media(max-width: 800px) {
      display: none;
  }
`

export const FooterMidias = styled.div` 
  text-align: center;
  width: 600px;

  @media(max-width: 800px) {
    padding-right: 2rem;
    width: 50%;
  }
`
export const FooterPages = styled.div`
  font-family: 'Segoe UI', sans-serif;
  font-size: .8rem;
  text-align: right;
  margin-top: .8rem;
  margin-right: 4rem;
  width: 100%;

  @media(max-width: 800px) {
      display: none;
  }
`
export const FooterTitle = styled.h3`
  font-weight: 500;
  padding-bottom: .5rem;  
`

export const FooterLink = styled.a`
  flex-direction: row;
  align-items: top;
  color: #aaa;
  text-decoration: none;
  transition: color .5s;
  line-height: 1rem;
  // widht: 100%;
  cursor: pointer;

  white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // direction: ltr;  

  &:hover {
    color: #fff;
  }
`