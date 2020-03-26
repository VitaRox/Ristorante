import React, {useState} from "react";
// import {render} from "react-dom";

// This Component gets the order, styles it, and is rendered to the ReactDOM by App;
function Order() {

  // Hooks, which set the default state of the first parameter named after 'const';
  const [dishName, setDish] = useState("");
  const [portion, setPortion] = useState("");
  const [specialRequest, setSpecialRequest] = useState("n/a");

  // const order = () => {
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
            onChange={e => setDish(e.target.value)}
            placeholder="Name of a dish"
            type="text"
            name="dishName"
            required
           />
          <input
            value={setSpecialRequest}
            onChange={e => setDish(e.target.value)}
            placeholder="Special requests?"
            type="text"
            name={specialRequest}
            required
          />
        </form>
        <button type="submit" className="submitButton">Submit guest order</button>
      </div>
    );
  // };
};

export default Order;