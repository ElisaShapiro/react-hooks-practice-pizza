import React from "react";

function PizzaForm({ pizza, handleFormChange, handleEditPizza }) {
  //this pizza is the editPizza state from App.js
  function handleInputs(e) {
    handleFormChange(e.target.name, e.target.value)
  }
  //e.targets are input for text topping and dropdown size
  function handleRadioChange(e){
    handleFormChange(e.target.name, e.target.value === "Vegetarian")
  }
  //separate one for radio input

 function handleFormSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, { //don't forget / and pizza.id for interpolation
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(pizza),
    })
    .then(response => response.json())
    .then(handleEditPizza) //setPizzas with updated Pizza data via the function 
  }
  
  if(!pizza) return null; //if not editing no form? 
  const { topping, size, vegetarian } = pizza //need to destructure here for form values
  
  //submit event on form itself, each input has an onChange and added default value. vegetarian is boolean.
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleInputs}
          />
        </div>
        <div className="col">
          <select value={size} onChange={handleInputs} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
