import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { pizzaData } from "./data.js";
import "./index.css";

const [focaccia] = pizzaData;

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      {pizzaData.map((pizza) => {
        return (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        );
      })}
    </div>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

function Footer() {
  // return createElement("footer", null, "We are open till 8PM!")
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const footerMsg = isOpen ? "We're currently open!" : "We're closed";

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. {footerMsg}
    </footer>
  );
}

// React v18
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
