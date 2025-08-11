import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 11, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(items) {
    setItems((currentItems) => [...currentItems, items]);
  }

  function handleDeleteItem(itemId) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  }

  function handlePackedItem(itemId) {
    setItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
    });
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems((currentItems) => []);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        itemList={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackedItem}
        onClearList={handleClearList}
      />
      <Stats itemList={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 💼</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // Add new item to existing item list.
    onAddItems(newItem);
    // Reset form fields.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ itemList, onDeleteItem, onPackItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = itemList;
  if (sortBy === "description")
    sortedItems = itemList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = itemList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onPackItem={onPackItem}
              key={item.id}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear the list</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onPackItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onPackItem(item.id)}
      ></input>
      <p style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </p>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ itemList }) {
  if (!itemList.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list.</em>
      </footer>
    );
  }

  const itemLength = itemList.length;
  const numPackedItems = itemList.reduce(
    (acc, item) => (item.packed ? acc + 1 : acc),
    0
  );

  return (
    <footer className="stats">
      <em>
        {numPackedItems === itemLength
          ? "You got everything! You're ready to go!"
          : `💼 You have ${itemLength} items on your list, and you already packed (
        ${numPackedItems}) ${((numPackedItems / itemLength) * 100).toFixed(
              2
            )} %`}
      </em>
    </footer>
  );
}

export default App;
