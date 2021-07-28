import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(response => response.json())
    .then(setPizzas)
  }, []);

  function handleFormChange(name, value) {
    setEditPizza({
      ...editPizza,
      [name]: value
    }); //set key value pair for form data
  }
  function handleEditPizza(updatedPizza){
    const updatedPizzas = pizzas.map((pizza) => pizza.id === updatedPizza.id ? updatedPizza : pizza)
    setEditPizza(updatedPizza)
    setPizzas(updatedPizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm 
        pizza={editPizza} 
        handleFormChange={handleFormChange} 
        handleEditPizza={handleEditPizza} 
      />
      <PizzaList pizzas={pizzas} setEditPizza={setEditPizza}/>
    </>
  );
}

export default App;
