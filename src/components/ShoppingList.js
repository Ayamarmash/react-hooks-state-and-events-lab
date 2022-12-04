import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //const [itemsToDisplay, setItemsToDisplay] = useState(items)
  const [selectedCategory, setCatagory] = useState("All")
  function handleFiltering(event){
    setCatagory(event.target.value)
  }
  const itemsToDisplay = items.filter((item)=>{
    if(selectedCategory === "All") return true
    else{
      return item.category === selectedCategory
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleFiltering}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
