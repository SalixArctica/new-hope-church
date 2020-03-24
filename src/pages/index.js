import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroImage from "../components/hero"
import CrossesImg from "../images/crosses.jpg"
import Grid from "../components/grid"
import Button from "../components/button"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-size: 3rem;
`

const GradientDiv = styled.div`
  width: 100%;
  background-image: linear-gradient(
      to right,
      transparent,
      rgba(235, 186, 52, 1)
    ),
    url("/images/worshipping-guy.jpg");
  background-size: cover;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage>
      <Grid style={{ height: "100%" }}>
        <HeroContainer>
          <h1 style={{ margin: "0", padding: "0" }}>New Hope Church</h1>
          <div>
            <Button style={{ display: "inline" }}>Donate</Button>
            <Button style={{ display: "inline" }}>Learn more</Button>
          </div>
        </HeroContainer>
      </Grid>
    </HeroImage>
    <section style={{ width: "100%", textAlign: "center" }}>
      <Grid style={{ margin: "5rem 25rem" }}>
        <div>
          <h1 style={{ fontSize: "3rem" }}>Come worship with us!</h1>
          <p style={{ fontSize: "1.2rem" }}>
            <FontAwesomeIcon icon="map-marker-alt" /> 37684 West Highway 51,
            Mannford, OK 74044
          </p>
        </div>
        <Grid>
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
    </section>
    <section>
      <Grid>
        <GradientDiv />
        <div
          style={{
            backgroundColor: "rgb(235, 186, 52)",
            padding: " 2rem 10rem",
            textAlign: "center",
          }}
        >
          <h2>Upcoming Event</h2>
          <p>
            Elit non Lorem sit nisi laboris occaecat cillum in in eu cupidatat
            tempor culpa. Nisi et voluptate duis id elit nisi ex eu occaecat
            elit veniam duis enim. Incididunt cillum labore aute ullamco
            incididunt fugiat Lorem laborum aliqua Lorem eu id reprehenderit. Do
            irure occaecat Lorem minim Lorem commodo occaecat proident proident.
            Occaecat ea exercitation voluptate ex dolore velit id deserunt minim
            ad ex commodo. Aliquip aliqua cupidatat magna dolor irure ipsum
            commodo Lorem ea in in amet cupidatat incididunt. Dolore amet
            laborum occaecat aute.
          </p>
          <Button>Event Calendar</Button>
        </div>
      </Grid>
    </section>
    <section style={{ width: "100%", textAlign: "center" }}>
      <Grid style={{ margin: "5rem 25rem" }}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <h2>Contact Info</h2>
          <p style={{ fontSize: "1.2rem" }}>
            <FontAwesomeIcon icon="map-marker-alt" /> 37684 West Highway 51,
            Mannford, OK 74044
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            <FontAwesomeIcon icon="phone" /> (123) 456-7890
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            <FontAwesomeIcon icon="at" /> person@email.com
          </p>
        </div>
        <div>
          <h1 style={{ fontSize: "3rem" }}>Prayer request or question?</h1>
          <Button style={{ color: "black" }}>Contact Us!</Button>
        </div>
      </Grid>
    </section>
  </Layout>
)

export default IndexPage
