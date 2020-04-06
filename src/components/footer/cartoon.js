import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Cartoon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cartoon-me.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Link to="/about">
      <div style={{ width: 40 }} >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </Link >
  )
}

export default Cartoon;
