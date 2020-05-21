import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from "../components/contactHero"
import ResponsiveMargins from "../components/responsiveMargins"
import StaffCard from "../components/staffCard"
import Grid from "../components/grid"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-size: 3rem;
`


export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formStatus: "Send",
    }
  }

  handleSubmit = async (info, { setSubmitting }) => {
    let data = new FormData()
    data.append("data", JSON.stringify(info))

    return new Promise((resolve, reject) => {
      fetch(`/contacts`, {
        method: "POST",
        body: data,
      })
        .then(res => {
          if (res.status === 200) {
            this.setState({ done: true, formStatus: "Sent" })
            resolve()
          } else {
            this.setState({ error: true, formStatus: "Error" })
            console.error(res)
            reject(res)
          }
        })
        .catch(err => {
          console.error(err)
          this.setState({ error: true, formStatus: "Error" })
          reject()
        })
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <Hero>
          <HeroContainer>
            <h1>Contact</h1>
          </HeroContainer>
        </Hero>
        <ResponsiveMargins>
          <h1 style={{ width: "100%", borderBottom: "5px solid black" }}>
            Staff
          </h1>
          <Grid col="3">
            {this.props.data.allMarkdownRemark.edges.map(
              ({ node: { frontmatter: person } }) => (
                <StaffCard person={person} />
              )
            )}
          </Grid>
        </ResponsiveMargins>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query Staff {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "staff" } } }) {
      edges {
        node {
          id
          frontmatter {
            name
            position
            email
            image
          }
        }
      }
    }
  }
`
