import avatar from "../assests/img/avatar.jpg"

function InformationHeader() {
  return (
    <div className="informationHeader">
      <div className="informationHeaderText">
        <h1>Good Morning, Neo</h1>
        <p>Welcome back, nice to see you again, boss</p>
      </div>
      <div className="informationHeaderAvatar">
        <img src={avatar} alt="Error"/>
      </div>
    </div>
  )
}

export default InformationHeader