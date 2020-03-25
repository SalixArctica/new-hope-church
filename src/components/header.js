import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  margin: 0;
  background: ${props => (props.scrolled ? "gold" : "transparent")};
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: sticky;
  top: 0;
  z-index: 5;
  overflow: auto;
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: 1000px) {
    position: static;
  }
`

const HamburgerDiv = styled.div`
  visibility: hidden;
  position: absolute;
  font-size: 2rem;
  display: flex;
  flex-direction: "column";
  margin: 0 2rem 0 auto;
  transform: rotate(90deg);

  @media only screen and (max-width: 768px) {
    visibility: visible;
    position: static;
  }
`

const Title = styled.h1`
  margin: 0.5rem 1rem;
  font-weight: normal;
`

const NavLinks = styled.ul`
  margin: auto 1rem auto auto;

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    padding: 0;
    grid-column: 1 / span 2;
    height: ${props => (props.open ? "auto" : "0px")};
    background: teal;
    width: 100%;
  }
`

const Styledli = styled.li`
  display: inline;
  margin: 0 1rem;
  vertical-align: center;
  font-size: 1.5rem;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: block;
    text-align: middle;
    margin: 0;
    padding: 1rem;
    border: 1px solid white;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      navbarExtended: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset !== 0) {
      this.setState({ scrolledDown: true })
    } else {
      this.setState({ scrolledDown: false })
    }
  }

  toggleNavbar = () => {
    this.setState({ navbarExtended: !this.state.navbarExtended })
  }

  render() {
    return (
      <Nav scrolled={this.state.scrolledDown}>
        <Title>
          <StyledLink to="/">New Hope Church</StyledLink>
        </Title>
        <HamburgerDiv onClick={this.toggleNavbar}>|||</HamburgerDiv>
        <NavLinks open={this.state.navbarExtended}>
          <Styledli>
            <StyledLink to="/about">About</StyledLink>
          </Styledli>

          <Styledli>
            <StyledLink to="/events">Events</StyledLink>
          </Styledli>
          <Styledli>Donate</Styledli>
          <Styledli>Contact</Styledli>
        </NavLinks>
      </Nav>
    )
  }
}

export default Navbar
