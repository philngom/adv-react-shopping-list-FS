import { useReducer, useState } from 'react';
import styles from './ShoppingList.css';
import { useShoppingList } from '../context/ShoppingListProvider';
import Item from '../components/Item';

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
        <ul>
          {state.map((item) => {
            return (
              <li key={item.id} className={styles.bullet}>
                <Item item={item} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
