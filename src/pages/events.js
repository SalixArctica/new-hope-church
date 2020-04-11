import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Calendar from "../components/calendar"
import Flickity from "react-flickity-component"
import "flickity/css/flickity.css"
import GradientDiv from "../components/gradientDiv"
import sortEvents from "../utils/sortEvents"

const CarouselCell = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  background: black;
`

const Carousel = styled(Flickity)`
  min-height: 70vh;
  &:nth-child(even) {
    background-color: pink;
  }
`

const CalendarDiv = styled.div`
  margin: 1rem 3rem;

  @media only screen and (max-width: 768px) {
    margin: 1rem 0rem;
  }
`

const AboutPage = props => {
  const [flickityRef, setflickityRef] = useState(null)
  const currentEvents = sortEvents(props.data.allMarkdownRemark.edges)

  return (
    <Layout>
      <SEO title="Events" />
      <Carousel flickityRef={c => setflickityRef(c)}>
        {currentEvents.map((event, index) => {
          return (
            <CarouselCell>
              <GradientDiv
                color={index % 2 === 0 ? "#d0a9f5" : null}
                //flip={index % 2 == 0}
                img={event.image || null}
              >
                <div>
                  <h1>{event.title}</h1>
                  <h4>
                    {currentEvents[0].start.getTime() ===
                    currentEvents[0].end.getTime()
                      ? currentEvents[0].start.toDateString()
                      : currentEvents[0].start.toDateString() +
                        "-" +
                        currentEvents[0].end.toDateString()}
                  </h4>
                  <p>{event.description}</p>
                </div>
              </GradientDiv>
            </CarouselCell>
          )
        })}
      </Carousel>
      <CalendarDiv>
        <Calendar
          events={currentEvents.map((event, index) => {
            return { ...event, resource: index }
          })}
          flickityRef={flickityRef}
        />
      </CalendarDiv>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Events {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "event" } } }) {
      edges {
        node {
          id
          frontmatter {
            description
            end
            image
            start
            title
          }
        }
      }
    }
  }
`

export default AboutPage
