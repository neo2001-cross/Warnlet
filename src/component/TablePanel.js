import axios from "axios"
import { useEffect, useState } from "react"

function TablePanel() {
  
  const [history, setHistory] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/api/warnlet")
      .then(res => {
        setHistory(res.data.history)
      })
  },[])


  return(
    <div className="tablePanel">
      <div className="historyPanel leftPanel">
        {history.map((data, index) => {
          return(
            <li key={index}>{data.date}: {data.content}</li>
          )
        })}
      </div>
      <div className="transactionHistory rightPanel">

      </div>
    </div>
  )
}

export default TablePanel