import { useEffect,useState } from "react"
import avatar from "../assests/img/avatar.jpg"
import axios from "axios"

function InformationHeader() {
  
  const [name, setName] = useState("Guest")
  useEffect(() => {
    axios.get("http://localhost:4000/api/warnlet")
      .then( res => {
        setName(res.data.name)
      })
  },[])
  return (
    <div className="informationHeader">
      <div className="informationHeaderText">
        <h1>Good Morning, {name}</h1>
        <p>Welcome back, nice to see you again, boss</p>
      </div>
      <div className="informationHeaderAvatar">
        <img src={avatar} alt="Error"/>
      </div>
    </div>
  )
}

export default InformationHeader