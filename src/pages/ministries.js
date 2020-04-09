import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/aboutHero"
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

const MarkdownContainer = styled.div`
  p {
    font-size: 1.3rem;
  }

  h2:nth-of-type(odd) {
    color: #d0a9f5;
  }

  h2:nth-of-type(even) {
    color: rgba(235, 186, 52, 1);
  }
`

const ministriesPage = ({ data }) => (
  <Layout>
    <SEO title="Ministries" />
    <HeroImage>
      <Grid style={{ height: "100%" }}>
        <HeroContainer>
          <h1>Our Ministries</h1>
        </HeroContainer>
      </Grid>
    </HeroImage>
    <ResponsiveMargins>
      <MarkdownContainer
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </ResponsiveMargins>
  </Layout>
)

export const pageQuery = graphql`
  query ministries {
    markdownRemark(frontmatter: { type: { eq: "ministries-page" } }) {
      html
    }
  }
`

export default ministriesPage
