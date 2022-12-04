import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [appClass, setAppClass] = useState("App light")
  
  function handleModeButton(){
    appClass === "App dark" ? setAppClass("App light") : setAppClass("App dark")
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeButton}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
