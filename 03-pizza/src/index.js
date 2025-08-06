import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { pizzaData } from "./data.js"


const [focaccia] = pizzaData

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  )
}

function Pizza() {
  return (
    <>
    <img src="pizzas/focaccia.jpg" alt="Pizza Spinaci"></img>
    <h2>Pizza: {focaccia.name}</h2>
    <p>{focaccia.ingredients}</p>
    </>
  )
}

// React v18
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);