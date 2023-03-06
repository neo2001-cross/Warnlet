import CashTag from "./CashTag"

function CashPanel() {
  return(
    <div className="cashPanel">
      <CashTag name={"Cash"}/>
      <CashTag name={"E-wallet"}/>
      <CashTag name={"Banks"}/>
    </div>
  )
}

export default CashPanel 