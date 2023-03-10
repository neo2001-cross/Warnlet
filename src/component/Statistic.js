import axios from "axios"
import { useEffect, useState } from "react"

function Statistic() {
  const [total, setTotal] = useState(0)
  const [date, setDate] = useState("28/03/2023");
  const [ dailySpent, setDailySpent ] = useState(10)
  

  useEffect(() => {
    axios.get("http://localhost:4000/api/warnlet")
      .then( res =>{
        const { __, cash, EWallet, banking} = res.data.money
        setTotal(cash + EWallet + banking)
      })
  },[])

  useEffect(() => {
    const currentDate = new Date().getDate()
    const lastDate = date.slice(0,2)
    
    const remainingDate = Number(lastDate) - currentDate
    setDailySpent(Math.floor(total/remainingDate))
  },[total])

  return(
    <div className="statisticPanel">
      <div className="statisticTable leftPanel">
        <p className="tableTitle">Total</p>
        <p className="tableMainNumber">{total}</p>
      </div>
      <div className="statisticTable rightPanel">
        <p className="tableTitle">Daily Cost</p>
        <p className="tableMainNumber">{dailySpent}</p>
        <p className="dateNumber">{date}</p>
      </div>
    </div>
  )
}

export default Statistic