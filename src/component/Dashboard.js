import CashPanel from "./CashPanel"
import InformationHeader from "./InformationHeader"
import Statistic from "./Statistic"
import TablePanel from "./TablePanel"
import "./MainContainer.css"

function Dashboard() {
  return(
    <div className="mainContainer">
      <InformationHeader />
      <CashPanel />
      <Statistic />
      <TablePanel />
    </div>
  )
}

export default Dashboard