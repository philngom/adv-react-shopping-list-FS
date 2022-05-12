import { useReducer, useState } from 'react';
import styles from './ShoppingList.css';
import { useShoppingList } from '../context/ShoppingListProvider';

export default function ShoppingList() {
  const [item, setItem] = useState('');
  const { addItem, state } = useShoppingList();

  const handleAddItem = (e) => {
    e.preventDefault();
    addItem(item);
    setItem('');
  };

  return (
    <>
      <header>
        <h1 className={styles.heading}>Shopping List</h1>
        <p>Cart ({state.length})</p>
      </header>
      <main>
        <form onSubmit={handleAddItem}>
          <input
            placeholder="Add an item to your cart"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button>Add</button>
        </form>
        {state.map((item) => (
          <p>{item.item}</p>
        ))}
      </main>
    </>
  );
}
