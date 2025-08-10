const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList listItems={initialItems} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}

function PackingList({ listItems }) {
  return (
    <div className="list">
      <ul>
        {listItems.map((item) => {
          return (
            <li>
              <input type="checkbox"></input>
              <p>{item.description}</p>
              <button>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on yourlist, and you already packed X%</em>
    </footer>
  );
}

export default App;
