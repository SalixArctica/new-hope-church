import React from "react"
import PropTypes from "prop-types"
import styled, { StyleSheetManager } from "styled-components"

import formatPhoneNumber from "../../utils/formatPhoneNumber"
import Layout from "../../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SEO from "../../components/seo"
import HeroImage from "../../components/hero"
import Grid from "../../components/grid"
import Button, { LinkButton } from "../../components/button"
import Responsive from "../../components/responsiveMargins"
import GradientDiv from "../../components/gradientDiv"
import sortEvents from "../../utils/sortEvents"
import withStyledComponents from "../../utils/withStyledComponents"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-size: 3rem;

  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`

const Taco = styled.h1`
  color: pink;
`

const IndexPagePreview = ({ entry, widgetFor }) => {
  const currentEvents = sortEvents([
    {
      node: {
        id: "3d89de61-01a5-54f7-934a-9565f52d25bd",
        frontmatter: {
          description:
            "Enim culpa aute sit reprehenderit dolor ea veniam officia labore. Et quis adipisicing nulla cupidatat velit minim qui ad nostrud labore laboris. Id anim reprehenderit qui labore aliquip minim. Veniam Lorem Lorem minim duis proident cupidatat aliqua adipisicing. Sit voluptate irure incididunt ullamco reprehenderit ex mollit. Aute elit sit duis ea est eiusmod commodo consequat pariatur labore labore sint ut. Aliqua dolor ullamco exercitation reprehenderit quis nisi enim consequat.",
          end: "2020-04-15T19:25:28.540Z",
          image: "/assets/john-price-razqizox3mu-unsplash-1-.jpg",
          start: "2020-04-15T19:25:28.522Z",
          title: "Example Event",
        },
      },
    },
  ])
  const indexPageInfo = entry.getIn(["data"]).toJS()
  return withStyledComponents(<Taco>Hello World</Taco>)
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IndexPagePreview
