import React from "react"
import styled from "styled-components"

const Card = styled.div`
  border: 5px solid gold;
  margin: 1rem;
`
const CardImg = styled.div`
  background-image: ${props => "url(" + props.img + ")"};
  height: 20rem;
  width: 100%;
  background-size: contain;
  background-position: center;
`

export default ({ person }) => {
  return (
    <Card>
      <CardImg img={person.image} />
      <div style={{ borderTop: "5px solid gold", padding: "1rem" }}>
        <h3>
          {person.name} - {person.position}
        </h3>
        <p>{person.email}</p>
      </div>
    </Card>
  )
}
