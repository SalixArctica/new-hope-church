import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Hero from "../components/contactHero"
import Calendar from "../components/calendar"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-size: 3rem;
`

const aboutPage = props => (
  <Layout>
    <SEO title="Events" />
    <Hero>
      <HeroContainer>
        <h1>Contact</h1>
      </HeroContainer>
    </Hero>
  </Layout>
)

export default aboutPage
