import { useNavigate } from "react-router-dom";
import "./Navbar.css"



export const Navbar =()=>{
 const navigate =useNavigate()
    return(
        <div className="navbar">
            <h2 onClick={()=>navigate("/")}>TheFoodList</h2>
        </div>
    )
}