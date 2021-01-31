import styled from "styled-components"

const SideNavIconList = styled.div`
  width: 60px;
  min-height: 100vh;
  background: #2a353c;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  z-index: 2;
`

const SideNavMenuItem = styled.div`
  color: #e5e5e5;
  position: relative;
  z-index: 2;
  width: ${props => (props.home ? "60px" : "60px")};
  height: ${props => (props.home ? "60px" : "60px")};
  margin: ${props => (props.home ? "10px" : "0px")} 0px
    ${props => (props.home ? "35px" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    width: ${props => (props.home ? "48px" : "28px")};
    height: ${props => (props.home ? "48px" : "28px")};
  }
  &:hover {
    cursor: ${props => (props.activated ? "pointer" : "null")};
    background: ${props => props.id !== "home" && "#6b818f"};
  }
  background: ${props => (props.selected ? "#031926" : "inherit")};
  &#toggle {
    margin-top: auto;
  }
`

export { SideNavIconList, SideNavMenuItem }
