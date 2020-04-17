import styled from "styled-components"
import { Link } from "gatsby"

export const BlogWrapper = styled.section`
color: #283E4A;
background: #FCFCFC;
min-height: 40vh;
height: 100%;
width: 100%;
padding-top: 2rem;
padding-bottom: 1rem;

display: flex;
flex-direction: column;
justify-content: top;
align-items: center;  
`

export const PostWrapper = styled(Link)`
  width: 80%;
  color: #283E4A;
  background: #FCFCFC;
  // border: solid 1px #777;
  text-decoration: none;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border: solid 1px #FCFCFC;

  &:hover {
    color: #283E4A;
    border: solid 1px rgb(206, 220, 247, 50);
`