import React from "react"
import { nanoid } from "@reduxjs/toolkit"
import { useSelector, useDispatch } from "react-redux"
import {
  addNewTemp,
  deleteTemp,
  removeTemp
} from "../../reducers/templateSlice"
import { getTempList, getSelectedParam } from "../../selectors"
import ErrorBoundary from "../ErrorBoundary"
import {
  ListWrapper,
  ActionSection,
  EmptyText,
  Button
} from "./__styled__/TemplateList"
import TemplateItem from "./TemplateItem"

const TemplateList = () => {
  const dispatch = useDispatch()
  const tempList = useSelector(state => getTempList(state))
  const selectedParam = useSelector(state => getSelectedParam(state))

  const createNewTemp = () => {
    let templateFields = []
    Object.keys(selectedParam.properties).forEach(fieldName => {
      templateFields.push({
        name: fieldName,
        ...selectedParam.properties[fieldName]
      })
    })

    const mappedData = templateFields.map(item => ({
      [item.name]: item.type === "string" ? "" : 0
    }))

    dispatch(
      addNewTemp({
        paramId: selectedParam.id,
        title: "",
        description: "",
        formData: Object.assign({}, ...mappedData)
      })
    )
  }

  const onDelete = (template, index) => {
    if (template.id) {
      dispatch(deleteTemp(template))
    } else {
      dispatch(removeTemp(index))
    }
  }

  return (
    <ListWrapper selected={selectedParam}>
      {selectedParam ? (
        <ErrorBoundary title={`template list for ${selectedParam.title}`}>
          <ActionSection>
            <Button
              data-testid="createBtn"
              type="primary"
              onClick={createNewTemp}
            >
              Create
            </Button>
          </ActionSection>
          {tempList.map((template, index) => (
            <TemplateItem
              data={template}
              key={nanoid()}
              schema={selectedParam}
              onDelete={() => onDelete(template, index)}
            />
          ))}
        </ErrorBoundary>
      ) : (
        <EmptyText data-testid="placeholderText">
          Please select a parameter
        </EmptyText>
      )}
    </ListWrapper>
  )
}

export default TemplateList
