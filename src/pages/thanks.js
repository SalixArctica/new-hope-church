import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/hero"
import Grid from "../components/grid"
import ResponsiveMargins from "../components/responsiveMargins"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-size: 3rem;
`

const ThanksPage = () => (
  <Layout>
    <SEO title="Ministries" />
    <HeroImage>
      <Grid style={{ height: "100%" }}>
        <HeroContainer>
          <h1>Thank You</h1>
        </HeroContainer>
      </Grid>
    </HeroImage>
    <ResponsiveMargins>
      <h1>
        We appreciate your donation, it will help us in spreading the word of
        God
      </h1>
      <Link to="/">
        <u>
          <h2>Return Home</h2>
        </u>
      </Link>
    </ResponsiveMargins>
  </Layout>
)

export default ThanksPage
