import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Calendar from "../components/calendar"

const aboutPage = props => (
  <Layout>
    <Hero />
    <div style={{ margin: "5rem" }}>
      <Calendar />
    </div>
  </Layout>
)

export default aboutPage
