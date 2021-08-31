import styled from "styled-components"
import variables from "../variables"

export const Button = styled.button`
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem;
  cursor: pointer;
  color: #fff;
`

export const BtnPrimary = styled(Button)`
  background-color: ${variables.btn_primary};
  
  &:hover {
    background-color: ${variables.btn_primary_hover};
  }
`

export const BtnDanger = styled(Button)`
  background-color: ${variables.btn_danger};

  &:hover {
    background-color: ${variables.btn_danger_hover};
  }
`

export const Group = styled.div`
  display: flex;
`