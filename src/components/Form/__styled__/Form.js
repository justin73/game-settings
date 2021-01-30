import { Form } from "formik"
import styled from "styled-components"

const StyledSelect = styled.select`
  color: var(--blue);
  color: white;
`

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`

const StyledLabel = styled.label`
  margin-top: 1rem;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StlyedForm = styled(Form)`
  width: 100%;

  button {
    display: block;
    margin-top: 10px;
  }
`

const FormMeta = styled.div`
  input {
    width: 100%;
  }
`

const FormFields = styled.div`
  border: 1px solid #657b92;
  padding: 30px;
  padding-top: 10px;
  margin-top: 20px;
`
const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  label {
    margin-top: 0px;
    margin-right: 10px;
  }
`
const FormAction = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`

export {
  StyledSelect,
  StyledErrorMessage,
  StyledLabel,
  FormWrapper,
  FormMeta,
  FormFields,
  FormField,
  StlyedForm,
  FormAction
}
