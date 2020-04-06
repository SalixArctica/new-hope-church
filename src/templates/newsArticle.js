import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "flickity/css/flickity.css"
import ResponsiveMargins from "../components/responsiveMargins"
import Grid from "../components/grid"

export default ({ data: { markdownRemark: article } }) => {
  return (
    <Layout>
      <SEO title={article.frontmatter.title} />
      <ResponsiveMargins>
        <img style={{ width: "100%" }} src={article.frontmatter.image} />
        <Grid>
          <h1>{article.frontmatter.title}</h1>
          <h3 style={{ color: "grey", textAlign: "right", marginTop: "2rem" }}>
            {new Date(article.frontmatter.published).toDateString()}
          </h3>
        </Grid>

        <div
          style={{ fontSize: "1.3rem" }}
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </ResponsiveMargins>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        published
        image
      }
      html
    }
  }
`
