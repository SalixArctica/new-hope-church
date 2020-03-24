import styled from "styled-components"

export default styled.button`
  border: none;
  padding: 1rem 2rem;
  font-size: 2rem;
  background: transparent;
  color: white;
  border: 5px solid gold;
  border-radius: 1rem;
  margin: 1rem 1rem 1rem 0;
  font-family: "Roboto", sans-serif;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px 2px 5px #888888;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`
