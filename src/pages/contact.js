import React from "react"
import SEO from "../components/seo"
import { Formik } from "formik"
import * as Yup from "yup"
import styled from "styled-components"

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

const StyledLabel = styled.label`
  display: block;
  margin: 1rem 0;
`
const StyledInput = styled.input`
  display: block;
  font-size: 2rem;
  width: ${props => props.width + "rem"};
`

const StyledTextarea = styled.textarea`
  display: block;
  height: 10rem;
  width: 100%;
  resize: none;
  font-size: 2rem;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  transition: all 0.5s ease-in-out;
  min-width: 10rem;
  border-radius: 0.5rem;
  box-shadow: none;
  background: ${props => (props.done ? "green" : props.error ? "red" : "teal")};
  color: white;
  border: none;
  transition: all 0.2s ease-in-out;
  cursor: ${props => (props.loading || props.done ? "default" : "pointer")};
  font-size: 2rem;
  margin: 1rem;

  &:hover {
    box-shadow: ${props =>
      props.loading || props.done ? "none" : "2px 2px 5px slategrey"};
  }
`

const LoadingButton = props => (
  <Button
    red={props.error}
    disabled={props.loading || props.done || props.error}
    {...props}
  >
    {props.error
      ? "Error"
      : props.loading
      ? "Sending..."
      : props.done
      ? props.formStatus || "Done"
      : props.children}
  </Button>
)

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
