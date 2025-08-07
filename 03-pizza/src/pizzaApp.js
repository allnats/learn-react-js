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
  // Check if pizzaData is empty.
  const isMenuEmpty = pizzaData.length === 0;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* Render the elements in "pizzaData" as Pizza components. */}
      {!isMenuEmpty ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone ove, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza key={pizza.name} pizzaObj={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  const { name, ingredients, price, photoName, soldOut } = pizzaObj;

  // if (soldOut) return null;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : null}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
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
  const footerMsg = isOpen
    ? "We're open till 10:00 PM. Come visit us or Order online."
    : `We're happy to welcome you between ${openHour}:00 and ${closeHour}:00`;

  return (
    <footer className="footer">
      <Order isOpen={isOpen} footerMsg={footerMsg} />
    </footer>
  );
}

function Order({ isOpen, footerMsg }) {
  return (
    <div className="order">
      <p>
        {new Date().toLocaleTimeString()}. {footerMsg}
      </p>
      {isOpen && <button className="btn">Order</button>}
    </div>
  );
}
