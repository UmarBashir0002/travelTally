import { useState } from "react";
import  Logo  from "./Logo";
import  Form  from "./Form";
import  List  from "./List";
import  STATS  from "./STATS";

export default function App() {
  const [packedItems, setPackedItems] = useState([]);

  function handlePackedItems(item) {
    console.log("item is", item);
    setPackedItems((packedItems) => [...packedItems, item]);
    console.log("packed items are", packedItems);
  }
  function handleDeleteItems(id) {
    setPackedItems((packedItems) =>
      packedItems.filter((item) => item.id !== id)
    );
  }
  function handleToggleButton(id) {
    setPackedItems((packedItems) =>
      packedItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      ),

    );
  }
  function handleClearListButton(){
    setPackedItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handlePackedItems} />
      <List
        packedItems={packedItems}
        onDeleteItem={handleDeleteItems}
        onToggleButton={handleToggleButton}
        onClearList={handleClearListButton}
      />
      <STATS items = {packedItems}/>
    </div>
  );
}


