import styled from "styled-components"

export const ListWrapper = styled.div`
  width: 30vw;
  background: var(--black-200);
  display: flex;
  align-items: flex-start;
  height: 80vh;
  overflow-y: auto;
  border-radius: 5px;
`

export const ParamList = styled.div`
  width: 100%;
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--blue-100);
  padding-top: 15px;
`

export const ParamItem = styled.div`
  width: 90%;
  background: ${props => (props.selected ? "#4e5b6c;" : "#46536d")};
  padding: 20px;
  border-radius: 5px;
  margin: 10px 0px;
  box-sizing: border-box;
  height: 80px;
  font-size: 1.2em;
  font-weight: 700;
  border: ${props =>
    props.selected ? "2px solid #eef4f2;" : "2px solid transparent;"};
  &:hover {
    background: #7d9ba6;
    cursor: pointer;
  }
`
