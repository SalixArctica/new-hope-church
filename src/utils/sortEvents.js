export default events => {
  const sortedEvents = events.map(event => {
    return {
      title: event.node.frontmatter.title,
      end: new Date(event.node.frontmatter.end),
      start: new Date(event.node.frontmatter.start),
      description: event.node.frontmatter.description,
      image: event.node.frontmatter.image,
    }
  })

  //sort events by start date
  sortedEvents.sort((a, b) => a.start - b.start)

  //get rid of events that have already happened
  return sortedEvents.filter(e => e.end > Date.now())
}
