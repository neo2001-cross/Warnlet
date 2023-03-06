import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWallet } from "@fortawesome/free-solid-svg-icons"


function Avatar() {
  return (
    <div className="sidebarAvatar">
      <FontAwesomeIcon icon={faWallet}/>
      <p className="sidebarGreetings">Warnlet</p>
    </div>
  )
}

export default Avatar