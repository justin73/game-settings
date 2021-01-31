import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadParamList, setSelectedParam } from "../../reducers/paramSlice"
import { loadTempList } from "../../reducers/templateSlice"
import { getParamList, getSelectedParam } from "../../selectors"
import {
  ListWrapper,
  ParamItem,
  ParamList as StyledParamList
} from "./__styled__/ParamList"

const ParamList = () => {
  const dispatch = useDispatch()
  const selectedParam = useSelector(state => getSelectedParam(state))
  const paramList = useSelector(state => getParamList(state))

  useEffect(() => {
    dispatch(loadParamList())
  }, [dispatch])

  const loadTempForParam = id => {
    if (selectedParam?.id === id) return
    dispatch(setSelectedParam(id))
    dispatch(loadTempList({ paramId: id }))
  }

  return (
    <ListWrapper>
      <StyledParamList>
        {paramList.map(param => (
          <ParamItem
            key={param.id}
            role="item"
            selected={selectedParam?.id === param.id}
            onClick={() => loadTempForParam(param.id)}
          >
            {param.title}
          </ParamItem>
        ))}
      </StyledParamList>
    </ListWrapper>
  )
}

export default ParamList
