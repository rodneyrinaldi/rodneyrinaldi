import styled from "styled-components"
import { Link } from "gatsby"

export const BlogWrapper = styled.nav`
  color: #283E4A;
  background: #FCFCFC;
  height: 100%;
  width: 100%;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SearchWrapper = styled(Link)`
  color: #283E4A;
  background: #FCFCFC;
  text-decoration: none;
  padding-left: .5rem;
  padding-right: .5rem;
  min-width: 5rem;
`