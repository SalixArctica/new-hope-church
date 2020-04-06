import React from "react"
import styled from "styled-components"
import Grid from "../components/grid"

const GradientDiv = styled.div`
  width: calc(100% + 5px);
  background-image: linear-gradient(
      ${props => (props.flip ? "to left" : "to right")},
      transparent,
      ${props => props.color || "rgba(235, 186, 52, 1)"}
    ),
    url(${props => (props.img ? props.img : "/images/worshipping-guy.jpg")});
  background-size: cover;
  background-position: center;
  height: ${props => (props.shrink ? "1000vh" : "60vh")};
  min-height: 25rem;
`

const ContentDiv = styled.div`
  background-color: ${props => props.color || "rgba(235, 186, 52, 1)"};
  padding: 2rem 10vw;
  z-index: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * > p {
    font-size: 1.4rem;
  }
`

const gradientContainer = props => (
  <Grid style={{ height: "100%", width: "100%" }}>
    {props.flip ? (
      <>
        <ContentDiv color={props.color}>{props.children}</ContentDiv>
        <GradientDiv
          shrink={props.shrink}
          color={props.color}
          img={props.img}
          flip={props.flip}
        />
      </>
    ) : (
      <>
        <GradientDiv color={props.color} img={props.img} flip={props.flip} />
        <ContentDiv color={props.color}>{props.children}</ContentDiv>
      </>
    )}
  </Grid>
)

export default gradientContainer
