import {React, useState} from "react";

function Item({ name, category }) {
  const [itemState, setItemState] = useState("")
  const [buttonInnerText, setbuttonInnerText] = useState("Add to Cart")
  function addItemToCart(){
    itemState === "" ? setItemState("in-cart") : setItemState("")
    buttonInnerText === "Add to Cart" ? setbuttonInnerText("Remove from Cart") : setbuttonInnerText("Add to Cart")
  }
  return (
    <li className={itemState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItemToCart}>{buttonInnerText}</button>
    </li>
  );
}

export default Item;
