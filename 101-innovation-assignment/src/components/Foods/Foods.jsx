import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import icon from "../icon.png"
import "./Foods.css"
export const Foods =()=>{
   const [data,setData] =useState([])
   const navigate =useNavigate()
   useEffect(()=>{
       axios.get("http://localhost:8000/data").then((res)=>{
        // console.log(res.data)
        setData(res.data)
       })
   },[])
    return (
        <div className="cont">
            {
                data.map((el)=>(
                    <div onClick={()=>navigate(`foods/${el.code}`)} key={el.code}>
                        <div>

                        <img src={icon} alt="icon" />
                        </div>
                        <div className="food"><span><b>{el.product_name}</b> </span><span>({el.generic_name})</span></div>
                        
                    </div>
                ))
            }
        </div>
    )
}