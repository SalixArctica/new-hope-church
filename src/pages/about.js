import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/aboutHero"
import Grid from "../components/grid"
import Button from "../components/button"
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

const aboutPage = props => (
  <Layout>
    <SEO title="About" />
    <HeroImage>
      <Grid style={{ height: "100%" }}>
        <HeroContainer>
          <h1>About Us</h1>
          <div>
            <Button style={{ display: "inline" }}>Our Mission</Button>
            <Button style={{ display: "inline" }}>Ministries</Button>
          </div>
        </HeroContainer>
      </Grid>
    </HeroImage>
    <ResponsiveMargins>
      <h1 style={{ color: "#bb80f2" }}>Loving God = Care & Benevolence</h1>
      <p style={{ fontSize: "1.5rem" }}>
        New Hope’s definition of Loving God is “A compassionate love for God
        that is lived out in our actions.” New Hope does this through acts of
        care and benevolent missions in our communities, Oklahoma, the United
        States and the world.
      </p>
      <h1 style={{ color: "#ebba34" }}>Giving Hope = Evangelism</h1>
      <p style={{ fontSize: "1.5rem" }}>
        New Hope’s definition of Giving Hope is “Actively giving Hope through
        the Good News of God's love, Mercy, and grace.” New Hope actively
        presents the Gospel of Jesus Christ through outreach and missions
        continually bringing people to the Lord Jesus Christ for salvation and
        His abundant life in our communities, Oklahoma, the United States and
        the world.
      </p>
      <h1 style={{ color: "#bb80f2" }}>Loving People = Discipleship</h1>
      <p style={{ fontSize: "1.5rem" }}>
        New Hope’s definition of Loving People is “Loving people by actively
        demonstrating God's life changing power.” We can see discipleship at New
        Hope in so many people here that at one time were far from God, not
        being used of God, & not even considering being used of God. We see
        every Sunday changed people that were not going to church, then going to
        church, but not serving. Who now are going to church & serving God in
        many different capacities. Many of those who were not, are now actively
        Loving God by bringing others to Christ, then disciplining them in
        serving Christ and who are enjoying a loving relationship with the Lord
        Jesus Christ.
      </p>
      <h1 style={{ color: "#ebba34" }}>
        Teaching Truth = Teaching and Preaching the God’s Word
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        New Hope’s definition of Teaching Truth is “Actively teaching God's
        Biblical Truth for practical daily living.” We believe the Bible, God’s
        Word is infallible and without error. Matthew 7:28-29 says, “And so it
        was, when Jesus had ended these sayings, that the people were astonished
        at His teaching, for He taught them as one having authority, and not as
        the scribes.” At New Hope we preach and teach the word of God, and not
        the opinions of men or women. Hebrew 4:12 “For the word of God is living
        and powerful, and sharper than any two-edged sword, piercing even to the
        division of soul and spirit, and of joints and marrow, and is a
        discerner of the thoughts and intents of the heart.”
      </p>
    </ResponsiveMargins>
  </Layout>
)

export default aboutPage
