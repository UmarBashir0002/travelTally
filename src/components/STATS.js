export default function STATS({ items }) {
  const numItems = items.length;
  const packedItems = items.filter(item => item.packed).length;

  return (
    <div className="stats">
      <em>
        <h3>you have {numItems} items on your list , and you already packed {packedItems} (X%)</h3>
      </em>
    </div>
  );
}
