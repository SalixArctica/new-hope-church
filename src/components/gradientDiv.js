import React from "react"
import styled from "styled-components"
import Grid from "../components/grid"

const GradientDiv = styled.div`
  width: calc(100% + 5px);
  background-image: linear-gradient(
      ${props => (props.flip ? "to left" : "to right")},
      transparent,
      rgba(235, 186, 52, 1)
    ),
    url("/images/worshipping-guy.jpg");
  background-size: cover;
  background-position: center;
  margin-left: -5px;
`

const ContentDiv = styled.div`
  background-color: rgb(235, 186, 52);
  padding: 2rem 10vw;
  z-index: 1;
  text-align: center;
`

const gradientContainer = props => (
  <Grid>
    {props.flip ? (
      <>
        <ContentDiv>{props.children}</ContentDiv>
        <GradientDiv flip={props.flip} />
      </>
    ) : (
      <>
        <GradientDiv flip={props.flip} />
        <ContentDiv>{props.children}</ContentDiv>
      </>
    )}
  </Grid>
)

export default gradientContainer
