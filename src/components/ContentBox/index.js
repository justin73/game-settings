import React from "react"
import ParamList from "../ParamList"
import TemplateList from "../TemplateList"
import { StyledContentBox } from "./__styled__/ContentBox"

const ContentBox = () => (
  <StyledContentBox>
    <ParamList />
    <TemplateList />
  </StyledContentBox>
)

export default ContentBox
