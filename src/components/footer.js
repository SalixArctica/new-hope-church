import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Grid from "./grid"
import ResponsiveMargins from "./responsiveMargins"

const Footer = styled.footer`
  background: lightgray;
  font-size: 1.2rem;
`

export default () => {
  return (
    <Footer>
      <ResponsiveMargins>
        <Grid>
          <p style={{ margin: "0" }}>
            <Link to="/admin/">Admin Panel</Link>
          </p>
          <p style={{ textAlign: "right", margin: "0" }}>
            © New Hope Church {new Date().getFullYear()}
          </p>
        </Grid>
      </ResponsiveMargins>
    </Footer>
  )
}
