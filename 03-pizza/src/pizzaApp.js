import { pizzaData } from "./data.js";

export default function pizzaApp() {
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
    <main className="menu">
      <h2>Our menu</h2>

      {/* Render the elements in "pizzaData" as Pizza components. */}
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza key={pizza.name} pizzaObj={pizza} />;
        })}
      </ul>
    </main>
  );
}

function Pizza({ pizzaObj }) {
  const { name, ingredients, price, photoName, soldOut } = pizzaObj;
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
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
