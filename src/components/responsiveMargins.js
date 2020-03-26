import styled from "styled-components"

export default styled.div`
  margin: 1rem 10vw;
  padding: 2rem 10vw;
  flex-grow: 1;
  @media screen and (max-width: 1150px) {
    margin: 0;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
    margin-right: 0;
    padding: 1rem;
  }
`
