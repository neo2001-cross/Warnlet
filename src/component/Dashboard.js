import CashPanel from "./CashPanel"
import InformationHeader from "./InformationHeader"
import Statistic from "./Statistic"
import TablePanel from "./TablePanel"
import "./MainContainer.css"

function Dashboard( {money} ) {
  return(
    <div className="mainContainer">
      <InformationHeader />
      <CashPanel money={money}/>
      <Statistic />
      <TablePanel />
    </div>
  )
}

export default Dashboard