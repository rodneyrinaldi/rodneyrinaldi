import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default (areaImg) => {
  const data = useStaticQuery(graphql`
    query ($areaImg: String) {
      file(relativePath: { eq: $areaImg }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}