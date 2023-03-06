import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderAll } from "@fortawesome/free-solid-svg-icons"
function SidebarContentList() {
  return (
    <div className="sidebarContentList">
      <NavLink to={"/"} className="sidebarButton">
        <div className="sidebarButtonInside">
          <FontAwesomeIcon icon={faBorderAll} />
          <p>Dashboard</p>
        </div>
      </NavLink>
      
    </div>
  )
}

export default SidebarContentList