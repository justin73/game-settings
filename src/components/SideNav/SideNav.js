import PermDataSettingIcon from "@material-ui/icons/PermDataSetting"
import SendIcon from "@material-ui/icons/Send"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Logo } from "../../assets"
import { SideNavIconList, SideNavMenuItem } from "./__styled__/SideNav"

const SideNavBar = ({ selectedSideNavMenu, changeSelectedMenuItem }) => (
  <SideNavIconList>
    <SideNavMenuItem home data-testid="homeButton" id="home">
      <Logo />
    </SideNavMenuItem>
    <Link role="link" to="/">
      <SideNavMenuItem
        activated
        id="param"
        selected={selectedSideNavMenu === "param"}
        onClick={changeSelectedMenuItem}
      >
        <PermDataSettingIcon />
      </SideNavMenuItem>
    </Link>
    <Link role="link" to="/editor">
      <SideNavMenuItem
        activated
        id="editor"
        selected={selectedSideNavMenu === "editor"}
        onClick={changeSelectedMenuItem}
      >
        <SendIcon />
      </SideNavMenuItem>
    </Link>
  </SideNavIconList>
)

SideNavBar.propTypes = {
  selectedSideNavMenu: PropTypes.string,
  changeSelectedMenuItem: PropTypes.func
}

export default SideNavBar
