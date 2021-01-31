import React from "react"
import { IconButton } from "@material-ui/core"
import Accordion from "@material-ui/core/Accordion"
import styled from "styled-components"

export const ListWrapper = styled.div`
  width: calc(65vw - 20px);
  background: var(--black-200);
  display: flex;
  align-items: ${props => (props.selected ? "flex-start" : "center")};
  justify-content: ${props => (props.selected ? "flex-start" : "center")};
  height: 80vh;
  overflow-y: auto;
  box-sizing: border-box;
  margin-left: 20px;
  border-radius: 5px;
  flex-direction: column;
  padding: 20px;
`
export const ActionSection = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`

export const EmptyText = styled.h1`
  font-weight: 600;
  display: flex;
  font-size: 1.5em;
  letter-spacing: 1px;
`

export const Button = styled.button`
  color: var(--blue-100);
  background-color: #438c54;
  padding: 10px;
  font-weight: 900;
  border: none;
  border-radius: 5px;
`

export const StyledIconButton = styled(({ children, ...others }) => (
  <IconButton
    classes={{
      root: "customized"
    }}
    {...others}
  >
    {children}
  </IconButton>
))`
  &.customized {
    margin-left: auto;
    width: 48px;
    height: 48px;
    svg {
      color: var(--blue-100);
    }
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  .styledAccordion {
    border: ${props => (props.temp ? `3px dotted #9e9e9e` : "none")};
  }
`
export const StlyedAccordion = styled(
  ({ children, root, temporary, error, ...others }) => (
    <Accordion classes={{ root: "styledAccordion" }} {...others}>
      {children}
    </Accordion>
  )
)`
  &.styledAccordion {
    color: var(--blue-100);

    width: unset !important;
    height: unset !important;
    background-color: #46536d;
    border-radius: 5px;
    margin-bottom: 5px;
    flex: 1;
    svg {
      color: var(--blue-100);
    }
  }
`
