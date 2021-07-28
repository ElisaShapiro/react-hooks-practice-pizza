import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(response => response.json())
    .then(pizzaData => setPizzas(pizzaData))
  }, []);

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzas={pizzas}/>
    </>
  );
}

export default App;
