import { useState } from "react";

export default function List({ packedItems, onDeleteItem, onToggleButton, onClearList }) {
  const [sortBy, setSortBy] = useState('description');
  let sortedItems;
  if (sortBy === 'order') sortedItems = packedItems;
  if (sortBy === 'description') sortedItems = packedItems.slice().sort((a, b) => a.item.localeCompare(b.item));
  if (sortBy === 'status') sortedItems = packedItems.slice().sort((a, b) => Number(b.packed) - (a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            console.log("in listem item is", item),
            (
              <li key={item.id}>
                <input
                  type="checkbox"
                  value={false}
                  onChange={() => onToggleButton(item.id)} />
                <span
                  style={item.packed ? { textDecoration: "line-through" } : {}}
                >
                  {item.option} {item.item}
                </span>
                <button
                  style={{ color: "blue", fontSize: "100%" }}
                  onClick={() => onDeleteItem(item.id)}
                >
                  X
                </button>
              </li>
            )
          );
        })}
      </ul>
      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="order">Sort By Order </option>
        <option value="description">Sort By Description </option>
        <option value="status">Sort By Status </option>
      </select>
      <button onClick={onClearList}>Clear List</button>
    </div>
  );
}
