import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  margin: 0;
  background: ${props =>
    props.scrolled ? "gold" : props.open ? "gold" : "transparent"};
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: ${props => (props.open ? "absolute" : "sticky")};
  top: 0;
  z-index: 2;
  overflow: auto;
  transition: all 0.5s ease-in-out;
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
    background: gold;
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

const DonateButton = styled.input`
  border: none;
  background: none;
  display: inline;
  margin: 0 1rem;
  vertical-align: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
  font-family: "Roboto" sans-serif;
`

const StyledLink = styled(Link)`
  text-decoration: ${props => (props.current ? "underline" : "none")};
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
      <Nav open={this.state.navbarExtended} scrolled={this.state.scrolledDown}>
        <Title>
          <StyledLink to="/">New Hope Church</StyledLink>
        </Title>
        <HamburgerDiv onClick={this.toggleNavbar}>|||</HamburgerDiv>
        <NavLinks open={this.state.navbarExtended}>
          <Styledli>
            <StyledLink
              current={
                typeof window !== "undefined"
                  ? window.location.pathname.includes("about")
                  : false
              }
              to="/about"
            >
              About
            </StyledLink>
          </Styledli>
          <Styledli>
            <StyledLink
              current={
                typeof window !== "undefined"
                  ? window.location.pathname.includes("news")
                  : false
              }
              to="/news"
            >
              News
            </StyledLink>
          </Styledli>
          {/*
          <Styledli>
            <StyledLink
              current={
                typeof window !== "undefined"
                  ? window.location.pathname.includes("events")
                  : false
              }
              to="/events"
            >
              Events
            </StyledLink>
          </Styledli>
          <Styledli>
            <StyledLink
              current={
                typeof window !== "undefined"
                  ? window.location.pathname.includes("ministries")
                  : false
              }
              to="/ministries"
            >
              Ministries
            </StyledLink>
          </Styledli>
          */}
          <Styledli>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              id="donate"
              style={{ display: "inline" }}
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="CCJJE4Q2XANRY"
              />
              <input type="hidden" name="currency_code" value="USD" />
              <DonateButton type="submit" value="Donate" />
            </form>
          </Styledli>
          {/*
          <Styledli>
            <StyledLink
              current={
                typeof window !== "undefined"
                  ? window.location.pathname.includes("contact")
                  : false
              }
              to="/contact"
            >
              Contact
            </StyledLink>
          </Styledli>
            */}
        </NavLinks>
      </Nav>
    )
  }
}

export default Navbar
