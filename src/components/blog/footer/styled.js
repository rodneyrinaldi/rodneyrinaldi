import styled from "styled-components"
import { Link } from "gatsby"

export const BlogWrapper = styled.nav`
  color: #283E4A;
  background: #FCFCFC;
  height: 100%;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FilterWrapper = styled(Link)`
  color: #333;
  background: #FCFCFC;
  text-decoration: none;
  padding-left: 2rem;
  padding-right: 2rem;

  &:hover {
    color: #283E4A;
`

export const ControlWrapper = styled(Link)`
  color: #666;
  background: #FCFCFC;
  text-decoration: none;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 84px;

  &:hover {
    color: #283E4A;
`

