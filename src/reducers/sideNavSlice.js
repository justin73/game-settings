import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedSideNavMenu: "param"
}

const SidenavSlice = createSlice({
  name: "PARAMETER",
  initialState,
  reducers: {
    changeSelectedMenuItem: (state, action) => ({
      ...state,
      selectedSideNavMenu: action.payload
    })
  }
})

export const { changeSelectedMenuItem } = SidenavSlice.actions

export default SidenavSlice.reducer
