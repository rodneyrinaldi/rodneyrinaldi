import styled from "styled-components"
import { Link } from "gatsby"

export const BlogWrapper = styled.section`
color: #283E4A;
background: #FCFCFC;
min-height: 40vh;
height: 100%;
width: 100%;
padding-top: 1rem;
padding-bottom: 1rem;

display: flex;
flex-direction: column;
justify-content: top;
align-items: center;  
`

export const PostWrapper = styled(Link)`
  color: #333;
  background: #FCFCFC;
  border: solid 1px #777;
  text-decoration: none;
  padding-left: 2rem;
  padding-right: 2rem;

  &:hover {
    color: #283E4A;
`