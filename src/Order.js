import React, {useState} from "react";
import {render} from "react-dom";

// This Component gets the order, styles it, and is rendered to the ReactDOM by App;
function Order({dishName, portion, specialRequests}) {
  
  const [dishName, setDish] = useState("");
  
  const order = () => {
    return (
      <div>
        <form className="orderForm">
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="First name"
            type="text"
            name="firstName"
            required
          />
        </form>
      </div>
    );
  };
};

export default Order;