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
    const lastDate = Number(date.slice(0,2))
    let remainingDate = lastDate - currentDate
    const currentMonth = new Date().getMonth() + 1
    const nextMonth = Number(date.slice(3,5))
    const day31Month = [1,3,5,7,8,10,12]
    if(currentMonth === nextMonth){
      remainingDate = lastDate - currentDate
    }
    else{
      if (currentMonth === 2){
        remainingDate = 28 - currentDate + lastDate
      }
      else if (day31Month.indexOf(currentMonth)){
        remainingDate = 31 - currentDate + lastDate 
      }
      else{
        remainingDate = 30 - currentDate + lastDate
      }
    }
    

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
        <p className="dateNumber">Next day salary: {date}</p>
      </div>
    </div>
  )
}

export default Statistic