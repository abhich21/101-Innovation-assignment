import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import icon from "../icon.png";
import "./Details.css";
export const Details = () => {
  const [item, setItem] = useState({});
  const { code } = useParams();
   console.log(code);

  useEffect(() => {
    axios.get(`http://localhost:8000/data`).then((res) => {
        console.log("res",res.data);
        let data = res.data.filter((el)=>el.code ==code)
        console.log(...data)
        setItem(...data);
    });
  }, []);
  return (
    <div className="cont">
      <div>
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div className="detail">
          <span>
            <b>{item.product_name}</b>{" "}
          </span>
          <span>({item.generic_name})</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>URL</td>
            <td><a href={item.url}>link</a></td>
          </tr>
          <tr>
            <td>Container</td>
            <td>{item.packaging}</td>
          </tr>
          <tr>
            <td>Serving_size</td>
            <td>{item.serving_size}</td>
          </tr>
          <tr>
            <td>Energy_100g</td>
            <td>{item.energy_100g}</td>
          </tr>        
          <tr>
            <td>Omega_6_fat_100g</td>
            <td>{item.omega_6_fat_100g}</td>
          </tr>
          <tr>
            <td>Fat_100g</td>
            <td>{item.fat_100g}</td>
          </tr>
          <tr>
            <td>Fiber_100g</td>
            <td>{item.fiber_100g}</td>
          </tr>
          <tr>
            <td>Cholesterol_100g</td>
            <td>{item.cholesterol_100g}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{item.quantity}</td>
          </tr>
          <tr>
            <td>Salt_100g</td>
            <td>{item.salt_100g}</td>
          </tr>
          <tr>
            <td>Sodium_100g</td>
            <td>{item.sodium_100g}</td>
          </tr>
          <tr>
            <td>Sugar_100g</td>
            <td>{item.sugars_100g}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
