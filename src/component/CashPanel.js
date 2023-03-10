import { useEffect, useState } from "react"
import CashTag from "./CashTag"
import axios from "axios"

function CashPanel({money}) {
  const [cash, setCash] = useState({
    total: 0,
    cash: 0,
    EWallet: 0,
    banking: 0
  }) 
  useEffect(() =>{
    axios.get("http://localhost:4000/api/warnlet")
      .then( res =>{
       const { __, cash, money, banking} = res.data.money
       setCash(res.data.money)
      })
  },[])
  return(
    <div className="cashPanel">
      <CashTag name={"Cash"} money={cash.cash}/>
      <CashTag name={"E-wallet"} money={cash.EWallet}/>
      <CashTag name={"Banks"} money={cash.banking}/>
    </div>
  )
}

export default CashPanel 