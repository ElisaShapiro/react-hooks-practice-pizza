import React from "react";

function Pizza({ pizza, setEditPizza }) {
  const { topping, size, vegetarian } = pizza //destructure - helps the patch 
  
  function handleClickEdit() {
    setEditPizza(pizza)
  } //click edit button to populate form area with current info of selected pizza to be edited

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian" : "Not vegetarian"}</td>
      <td>
        <button onClick={handleClickEdit} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
