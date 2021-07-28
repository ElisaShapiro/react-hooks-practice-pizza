import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, setEditPizza }) {
  const pizzaDisplay = pizzas.map((pizza) => {
    return <Pizza key={pizza.id} pizza={pizza} setEditPizza={setEditPizza}/>
  }) //map outside and create card in a variable then put that into table
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaDisplay} 
      </tbody>
    </table>
  );
}

export default PizzaList;
