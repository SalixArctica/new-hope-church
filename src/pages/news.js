import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "flickity/css/flickity.css"
import HeroImage from "../components/newsHero"
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

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 1rem;

  & > h1 {
    text-decoration: underline;
    margin-bottom: 0;
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="News" />

      <HeroImage>
        <Grid>
          <HeroContainer>
            <h1>News</h1>
          </HeroContainer>
        </Grid>
      </HeroImage>
      <ResponsiveMargins>
        {data.news.edges ? (
          data.news.edges.map(newsArticle => (
            <StyledLink
              to={"/news/" + newsArticle.node.frontmatter.title}
              style={{ margin: "1rem" }}
            >
              <h1>{newsArticle.node.frontmatter.title}</h1>
              <p style={{ color: "grey" }}>
                published:{" "}
                {new Date(
                  newsArticle.node.frontmatter.published
                ).toDateString()}
              </p>
              <p>{newsArticle.node.excerpt}</p>
            </StyledLink>
          ))
        ) : (
          <p>No news currently</p>
        )}
      </ResponsiveMargins>
    </Layout>
  )
}

export const pageQuery = graphql`
  query news {
    news: allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            published
            image
          }
        }
      }
    }
  }
`
