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
    url(${props => (props.img ? props.img : "/images/worshipping-guy.jpg")});
  background-size: cover;
  background-position: center;
  height: 70vh;
  margin-left: -5px;
  min-height: 25rem;
`

const ContentDiv = styled.div`
  background-color: rgb(235, 186, 52);
  padding: 2rem 10vw;
  z-index: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const gradientContainer = props => (
  <Grid style={{ height: "100%", width: "100%" }}>
    {props.flip ? (
      <>
        <ContentDiv>{props.children}</ContentDiv>
        <GradientDiv img={props.img} flip={props.flip} />
      </>
    ) : (
      <>
        <GradientDiv img={props.img} flip={props.flip} />
        <ContentDiv>{props.children}</ContentDiv>
      </>
    )}
  </Grid>
)

export default gradientContainer
