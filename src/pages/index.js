import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import formatPhoneNumber from "../utils/formatPhoneNumber"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SEO from "../components/seo"
import HeroImage from "../components/hero"
import Grid from "../components/grid"
import Button, { LinkButton } from "../components/button"
import Responsive from "../components/responsiveMargins"
import GradientDiv from "../components/gradientDiv"
import sortEvents from "../utils/sortEvents"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-size: 3rem;

  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`

const IndexPage = ({ data }) => {
  const currentEvents = sortEvents(data.allMarkdownRemark.edges)

  return (
    <Layout>
      <SEO title="Home" />
      <HeroImage>
        <Grid style={{ height: "100%" }}>
          <HeroContainer>
            <h1 style={{ margin: "0", padding: "0" }}>New Hope Church</h1>
            <div>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
                id="donate"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="DGZWVGNU55NSN" />
                <input type="hidden" name="currency_code" value="USD" />
                <Button
                  type="submit"
                  value="Submit"
                  style={{ display: "inline" }}
                >
                  Donate
                </Button>
                <LinkButton to="/about" style={{ display: "inline" }}>
                  Learn more
                </LinkButton>
              </form>
            </div>
          </HeroContainer>
        </Grid>
      </HeroImage>
      <section style={{ width: "100%", textAlign: "center" }}>
        <Responsive>
          <Grid>
            <div>
              <h1 style={{ fontSize: "3rem" }}>Come worship with us!</h1>
              <p style={{ fontSize: "1.2rem", margin: "1rem" }}>
                <FontAwesomeIcon icon="map-marker-alt" />{" "}
                {data.contactInfo.frontmatter.address}
              </p>
            </div>
            <Grid style={{ fontSize: "1.3rem" }}>
              <div>
                <h3>Sunday</h3>
                {data.serviceTimes.frontmatter.sunday_times.map(time => (
                  <p>{time}</p>
                ))}
              </div>
              <div>
                <h3>Wednesday</h3>
                <p>6:30 PM Children, Youth, & adult service and breakouts</p>
              </div>
            </Grid>
          </Grid>
        </Responsive>
      </section>
      <GradientDiv small img={currentEvents[0].image || null}>
        <div>
          <h2>Upcoming: {currentEvents[0].title} </h2>
          <h4>
            {currentEvents[0].start.getTime() === currentEvents[0].end.getTime()
              ? currentEvents[0].start.toDateString()
              : currentEvents[0].start.toDateString() +
                "-" +
                currentEvents[0].end.toDateString()}
          </h4>
          <p style={{ margin: "1rem 1rem 2rem 1rem" }}>
            {currentEvents[0].description}
          </p>
          <LinkButton to="/events">Event Calendar</LinkButton>
        </div>
      </GradientDiv>
      <section style={{ width: "100%", textAlign: "center", margin: "2rem 0" }}>
        <Responsive>
          <Grid>
            <div>
              <h2>Contact Info</h2>
              <p style={{ fontSize: "1.2rem" }}>
                <FontAwesomeIcon icon="map-marker-alt" />{" "}
                {data.contactInfo.frontmatter.address}
              </p>
              <p style={{ fontSize: "1.2rem" }}>
                <FontAwesomeIcon icon="phone" />{" "}
                {formatPhoneNumber(data.contactInfo.frontmatter.phone)}
              </p>
              <p style={{ fontSize: "1.2rem" }}>
                <FontAwesomeIcon icon="at" />{" "}
                {data.contactInfo.frontmatter.email}
              </p>
            </div>

            <div>
              <h1 style={{ fontSize: "3rem" }}>Prayer request or question?</h1>
              <LinkButton to="/contact" style={{ color: "black" }}>
                Contact Us!
              </LinkButton>
            </div>
          </Grid>
        </Responsive>
      </section>
      <section>
        <GradientDiv flip small>
          <div>
            <h2>News: title</h2>
            <p style={{ margin: "1rem 1rem 2rem 1rem" }}>words</p>
            <LinkButton to="/events">More News</LinkButton>
          </div>
        </GradientDiv>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
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
    serviceTimes: markdownRemark(
      frontmatter: { type: { eq: "service-times" } }
    ) {
      frontmatter {
        sunday_times
        wednesday_times
      }
    }
    contactInfo: markdownRemark(frontmatter: { type: { eq: "contact" } }) {
      frontmatter {
        address
        phone
        email
      }
    }
  }
`

export default IndexPage
