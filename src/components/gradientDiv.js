import React from "react"
import styled from "styled-components"
import Grid from "../components/grid"

const GradientDiv = styled.div`
  width: 100%;
  background-image: linear-gradient(
      ${props => (props.flip ? "to left" : "to right")},
      transparent,
      ${props => props.color || "rgba(235, 186, 52, 1)"}
    ),
    url(${props => (props.img ? props.img : "/images/worshipping-guy.jpg")});
  background-size: cover;
  background-position: center;
  height: ${props => (props.small ? "auto" : "70vh")};
  min-height: 25rem;

  @media screen and (max-width: 850px) {
    background-image: linear-gradient(
        ${props => (props.flip ? "to bottom" : "to top")},
        rgba(235, 186, 52, 1),
        transparent
      ),
      url(${props => (props.img ? props.img : "/images/worshipping-guy.jpg")});
  }
`

const ContentDiv = styled.div`
  background-color: ${props => props.color || "rgba(235, 186, 52, 1)"};
  z-index: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
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
          color={props.color}
          img={props.img}
          flip={props.flip}
          small={props.small}
        />
      </>
    ) : (
      <>
        <GradientDiv
          color={props.color}
          img={props.img}
          flip={props.flip}
          small={props.small}
        />
        <ContentDiv color={props.color}>{props.children}</ContentDiv>
      </>
    )}
  </Grid>
)

export default gradientContainer
