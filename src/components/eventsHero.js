import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = props => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "people-in-church.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={props.className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {props.children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  height: 70vh;
  width: 100%;
  background-size: cover;
  background-position: bottom;
  padding: 0px;
  margin: 0px;
`

export default StyledBackgroundSection
