import { useEffect, useState } from "react"
import CashTag from "./CashTag"
import axios from "axios"

function CashPanel({money}) {
  
  const [cash, setCash] = useState(0) 
  const [eWallet,setEWallet] = useState(0)
  const [banks, setBanks] = useState(0)
  const [moneyBag, setMoneyBag] = useState({})

  useEffect(() =>{
    axios.get("http://localhost:4000/api/warnlet")
      .then( res =>{
        const { __, cash, money, banking} = res.data.money
        setCash(res.data.money.cash)
        setEWallet(res.data.money.EWallet)
        setBanks(res.data.money.banking)
      })
  },[])
  return(
    <div className="cashPanel">
      <CashTag name={"Cash"} money={cash}/>
      <CashTag name={"E-wallet"} money={eWallet}/>
      <CashTag name={"Banks"} money={banks}/>
    </div>
  )
}

export default CashPanel 