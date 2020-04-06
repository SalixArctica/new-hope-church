import React from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"

import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

const BigCalendar = props => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={props.events}
        style={{ height: "80vh" }}
        onSelectEvent={event => {
          props.flickityRef.select(event.resource)
          window.scrollTo({ behavior: "smooth", top: 0 })
        }}
      />
    </div>
  )
}

export default BigCalendar
