import styled from "styled-components"
import variables from "../variables"

export const ProductItemContainer = styled.div`
  background-color: ${variables.bg};
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  transition: transform .2s ease-in;

  &:hover {
    transform: translateY(-5px);
  }

  & p {
    margin: .5rem 0;
  }

  & .delete-checkbox {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
`