import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItem({title,to,icon}) {
    return(
        <div className=" flex alitem">
            <NavLink className='menu-item' to={to}>
                <div className="decor"></div>
                <FontAwesomeIcon style={{color:"#7a8699"}} size="2xl" icon={icon}></FontAwesomeIcon>
                <span className=" font-bold">{title}</span>
            </NavLink>
        </div>
    )
}
export default MenuItem;