import { StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";
import { pizzaData } from "./data.js";

const [focaccia] = pizzaData;

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Pizza() {
  return (
    <>
      <img src="pizzas/focaccia.jpg" alt="Pizza Spinaci"></img>
      <h2>Pizza: {focaccia.name}</h2>
      <p>{focaccia.ingredients}</p>
    </>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  // return createElement("footer", null, "We are open till 8PM!")
  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
  );
}

// React v18
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
