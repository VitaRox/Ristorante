import React, {useState} from "react";
// import {render} from "react-dom";
import './App.css';

// This Component gets the order via a series of forms,
// and is rendered to the ReactDOM by App.js;
function Order() {

  // Hooks, which set the default state of the first parameter named after 'const';
  const [dishName, setDish] = useState("");
  const [portion, setPortion] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  // Defines the state and general JSX design of the order-input UI;
  return (
    <div>
      <form className="orderForm">
        <input
          value={dishName}
          onChange={e => setDish(e.target.value)}
          placeholder="Name of a dish"
          type="text"
          name="dishName"
          required
        />
        <input
          value={portion}
          onChange={e => setPortion(e.target.value)}
          placeholder="Enter portion size, lunch or dinner:"
          type="text"
          name="portion"
          required
         />
        <input
          value={specialRequest}
          onChange={e => setSpecialRequest(e.target.value)}
          placeholder="Special requests?"
          type="text"
          name="specialRequest"
          required
        />
      </form>
    </div>
    );
};

// Export this Component's functionality to App.js;
export default Order;