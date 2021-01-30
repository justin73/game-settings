import React, { useEffect } from "react"
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

  return (
    <ListWrapper>
      <StyledParamList>
        {paramList.map(param => (
          <p>{param.title}</p>
        ))}
      </StyledParamList>
    </ListWrapper>
  )
}

export default ParamList
