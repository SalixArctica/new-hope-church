import React from "react"
import styled from "styled-components"
import Grid from "./grid"
import ResponsiveMargins from "./responsiveMargins"

const Footer = styled.footer`
  background: lightgray;
  font-size: 1.2rem;
  margin-top: 4rem;
`

export default () => {
  return (
    <Footer>
      <ResponsiveMargins>
        <Grid>
          <p style={{ margin: "0" }}>
            © New Hope Church {new Date().getFullYear()}
          </p>
          <p style={{ textAlign: "right", margin: "0" }}>
            <a href="/admin/">Admin Panel</a>
          </p>
        </Grid>
      </ResponsiveMargins>
    </Footer>
  )
}
