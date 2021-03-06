import styled from "styled-components"
import variables from "../variables"

export const FormContainer = styled.form`
  margin-top: 2rem;

  & .msg {
    font-weight: bold;
  }

  & .err {
    color: ${variables.err};
  }
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin: .8rem 0;

  & span {
    margin-right: 1rem;
  }

  & input,
  & select {
    padding: .5rem;
    border: 1px solid ${variables.primary};
    border-radius: 10px;
  }
`