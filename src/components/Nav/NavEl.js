import styled from "styled-components"
import variables from "../variables"

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${variables.primary};
  color: ${variables.primary};
`