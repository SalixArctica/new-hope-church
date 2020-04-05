import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Grid from "../../components/grid"

const IndexPagePreview = ({ entry, widgetFor }) => {
  return (
    <Grid>
      <div>
        <h1 style={{ fontSize: "3rem" }}>Come worship with us!</h1>
        <p style={{ fontSize: "1.2rem", margin: "1rem" }}>
          <FontAwesomeIcon
            width="16"
            style={{ fontSize: "1.2rem" }}
            icon="map-marker-alt"
          />{" "}
          37684 West Highway 51, Mannford, OK 74044
        </p>
      </div>
      <Grid style={{ fontSize: "1.3rem" }}>
        <div>
          <h3>Sunday</h3>
          <p>9:15 AM Breakfast</p>
          <p>10:00 AM Sunday School</p>
          <p>10:55 AM Worhip Service</p>
          <p>6:00 PM Adult Bible Study</p>
        </div>
        <div>
          <h3>Wednesday</h3>
          <p>6:30 PM Children, Youth, & adult service and breakouts</p>
        </div>
      </Grid>
    </Grid>
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IndexPagePreview
