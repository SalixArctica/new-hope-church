export default events => {
  const sortedEvents = events.map(event => {
    return { ...event, start: new Date(event.start), end: new Date(event.end) }
  })

  sortedEvents.sort((a, b) => a.start - b.start)

  return sortedEvents.filter(e => e.end > Date.now())
}
