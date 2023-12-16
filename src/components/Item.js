import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

 
export default function ( props ) {
 return (
    <div className="item m-1">
      <div className="card" >
      <Link className=" text-decoration-none text-black" to={`/products/${props.id}`}>
        <img className="thumb" src={props.thumb} alt=""></img>
        <div className="itemName fw-semibold">{props.name}</div>
        <div className="item-price">{props.price} ฿ </div>
      </Link>
      <a href="#" className="btn btn-primary fw-medium">Add to Cart</a>
     </div>
  </div>
);
}
