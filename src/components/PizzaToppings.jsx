import React from "react";

const PizzaToppings = ({ pizzaName, pizzaToppings, onPizzaPush }) => {
  return (
    <div>
      <p>{pizzaName}</p>
      <h5>Pizza Toppings List</h5>
      <ul>
        {pizzaToppings.map((eachPizza) => (
          <li key={eachPizza}>{eachPizza}</li>
        ))}
      </ul>
      <button onClick={onPizzaPush}>Add Pizza</button>
    </div>
  );
};

export default PizzaToppings;
