import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

const Item = (props) => {

  return (
    <div className="item-container">
      <div className="item">
       <div className="card" >
      <Link to={`/products/${props.id}`}>
        <img className="thumb" src={props.thumb} alt=""></img>
        <p>{props.name}</p>
        <div className="item-price">{props.price}</div>
      </Link>
      <a href="#" className="btn btn-primary">Add to Cart</a>
       </div>
    </div>
    </div>
    
  );
}

export default Item;
