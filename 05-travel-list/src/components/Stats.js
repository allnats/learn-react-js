export function Stats({ itemList }) {
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
