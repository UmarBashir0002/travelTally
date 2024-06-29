import { useState } from "react";

export  default function Form({ onAddItems }) {
  const [option, setOption] = useState(1);
  const [item, setItem] = useState("");

  function handleChange(e) {
    setOption(e.target.value);
    e.preventDefault();
  }
  function halndleSubmit(e) {
    e.preventDefault();
    const newItem = {
      option,
      item,
      check: true,
      packed: false,
      id: Date.now(),
    };
    console.log("look the item passing to onAddItems", newItem);
    onAddItems(newItem);
    setItem('');
  }

  return (
    <form className="add-form" onSubmit={halndleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select value={option} onChange={handleChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option key={num} v>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="item.." />
      <button className="button">ADD</button>
    </form>
  );
}
