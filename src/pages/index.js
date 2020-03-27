import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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

const IndexPage = () => {
  const { strapi } = useStaticQuery(
    graphql`
      query GetLandingPageData {
        strapi {
          contactInfo {
            Address
            Email
            Phone
            Name
          }
          events {
            description
            end
            title
            start
          }
        }
      }
    `
  )

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
                <FontAwesomeIcon icon="map-marker-alt" /> 37684 West Highway 51,
                Mannford, OK 74044
              </p>
            </div>
            <Grid style={{ fontSize: "1.3rem" }}>
              <div>
                <h3>Sunday</h3>
                <p>9:15 AM Breakfast</p>
                <p>10:00 AM Sunday School</p>
                <p>10:55 AM Worhip Service</p>
                <p>6:00 PM Adult Bible Study</p>
              </div>
              <div>
                <h3>Wednesday</h3>
                <p>6:30 PM Children, Youth, & adult service and breakouts</p>
              </div>
            </Grid>
          </Grid>
        </Responsive>
      </section>
      <GradientDiv>
        <div>
          <h2>
            Upcoming: {strapi.events[0].title} {strapi.events[0].start}
          </h2>
          <p style={{ margin: "1rem 1rem 2rem 1rem" }}>
            {strapi.events[0].description}
          </p>
          <LinkButton to="/events">Event Calendar</LinkButton>
        </div>
      </GradientDiv>
      <section style={{ width: "100%", textAlign: "center" }}>
        <Responsive>
          <Grid>
            <div>
              <h2>Contact Info</h2>
              <p style={{ fontSize: "1.2rem" }}>
                <FontAwesomeIcon icon="map-marker-alt" />{" "}
                {strapi.contactInfo.Address}
              </p>
              <p style={{ fontSize: "1.2rem" }}>
                <FontAwesomeIcon icon="phone" />{" "}
                {formatPhoneNumber(strapi.contactInfo.Phone)}
              </p>
              <p style={{ fontSize: "1.2rem" }}>
                <FontAwesomeIcon icon="at" /> {strapi.contactInfo.Email}
              </p>
            </div>
            <div>
              <h1 style={{ fontSize: "3rem" }}>Prayer request or question?</h1>
              <LinkButton style={{ color: "black" }}>Contact Us!</LinkButton>
            </div>
          </Grid>
        </Responsive>
      </section>
    </Layout>
  )
}

export default IndexPage
