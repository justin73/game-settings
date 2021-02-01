const getSidenavReducer = state => state.sidenav

export const getSelectedMenu = state =>
  getSidenavReducer(state).selectedSideNavMenu
