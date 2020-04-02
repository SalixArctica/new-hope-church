import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  height: 70vh;
`

const AboutPage = props => {
  const [flickityRef, setflickityRef] = useState(null)

  const {
    strapi: { events },
  } = useStaticQuery(
    graphql`
      query GetEvents {
        strapi {
          events {
            description
            end
            title
            start
            picture {
              url
            }
          }
        }
      }
    `
  )

  const currentEvents = sortEvents(events)

  return (
    <Layout>
      <SEO title="Events" />
      <Carousel flickityRef={c => setflickityRef(c)}>
        {currentEvents.map(event => {
          return (
            <CarouselCell>
              <GradientDiv
                img={
                  event.picture
                    ? process.env.GATSBY_API_URL + event.picture.url
                    : null
                }
              >
                <div>
                  <h1>{event.title + " " + event.start}</h1>
                  <p>{event.description}</p>
                </div>
              </GradientDiv>
            </CarouselCell>
          )
        })}
      </Carousel>
      <div style={{ margin: "5rem" }}>
        <Calendar
          events={currentEvents.map((event, index) => {
            return { ...event, resource: index }
          })}
          flickityRef={flickityRef}
        />
      </div>
    </Layout>
  )
}

export default AboutPage
