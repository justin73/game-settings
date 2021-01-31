import React from "react"
// import { PropTypes } from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { changeSelectedMenuItem } from "../../reducers/sideNavSlice"
import { getSelectedMenu } from "../../selectors"
import PureSideNav from "./SideNav"

const SideNav = ({ ...props }) => {
  const dispatch = useDispatch()
  const selectedSideNavMenu = useSelector(state => getSelectedMenu(state))
  return (
    <PureSideNav
      changeSelectedMenuItem={e => {
        const nextItem = e.currentTarget.id
        e.persist()
        dispatch(changeSelectedMenuItem(nextItem))
      }}
      selectedSideNavMenu={selectedSideNavMenu}
      {...props}
    />
  )
}

export default SideNav
