import "./Sidebar.css"
import Avatar from "./Avatar.js"
import SidebarContentList from "./SidebarContentList";

function Sidebar(){
    return (
        <div className="sidebarContainer">
            <Avatar />
            <SidebarContentList/>
        </div>
    );
}

export default Sidebar