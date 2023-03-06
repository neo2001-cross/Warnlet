import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderAll, faMoneyCheck, faClockRotateLeft, faArrowsTurnToDots } from "@fortawesome/free-solid-svg-icons"

function SidebarContentList() {
  return (
    <div className="sidebarContentList">
      <NavLink to={"/"} className="sidebarButton">
        <div className="sidebarButtonInside">
          <FontAwesomeIcon icon={faBorderAll} />
          <p>Dashboard</p>
        </div>
      </NavLink>
      <NavLink to={"/moneysource"} className="sidebarButton">
        <div className="sidebarButtonInside">
          <FontAwesomeIcon icon={faMoneyCheck} />
          <p>Money source</p>
        </div>
      </NavLink>
      <NavLink to={"/history"} className="sidebarButton">
        <div className="sidebarButtonInside">
          <FontAwesomeIcon icon={faClockRotateLeft} />
          <p>History</p>
        </div>
      </NavLink>
      <NavLink to={"/transaction"} className="sidebarButton">
        <div className="sidebarButtonInside">
          <FontAwesomeIcon icon={faArrowsTurnToDots} />
          <p>Transaction</p>
        </div>
      </NavLink>
    </div>
  )
}

export default SidebarContentList