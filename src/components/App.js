import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState(null) //for editing form

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(response => response.json())
    .then(setPizzas) //setPizzas with current data
  }, []);

  function handleFormChange(name, value) {
    setEditPizza({
      ...editPizza,
      [name]: value
    }); //set key value pair for form data
  }
  function handleEditPizza(updatedPizza){
    const updatedPizzas = pizzas.map((pizza) => pizza.id === updatedPizza.id ? updatedPizza : pizza) //map through pizzas only change updated id rest stay the same
    setEditPizza(updatedPizza) //only changing state of updated pizza
    setPizzas(updatedPizzas)  //set all pizzas state to match updated pizzas variable
  }

  return (
    <>
      <Header />
      <PizzaForm 
        pizza={editPizza} //this pizza is edit form pizza
        handleFormChange={handleFormChange} 
        handleEditPizza={handleEditPizza} 
      />
      <PizzaList 
        pizzas={pizzas} 
        setEditPizza={setEditPizza}
      />
    </>
  );
}

export default App;
