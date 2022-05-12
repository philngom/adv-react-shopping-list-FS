import { useReducer, useState } from 'react';
import styles from './ShoppingList.css';

const initialState = [];

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          item: action.payload.item,
          done: false,
        },
      ];
    default:
      throw new Error('In reducer function');
  }
};
export default function ShoppingList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    dispatch({ type: 'add', payload: { item } });
    setItem('');
  };

  return (
    <>
      <header>
        <h1 className={styles.heading}>Shopping List</h1>
        <p>Cart ({state.length})</p>
      </header>
      <main>
        <form onSubmit={addItem}>
          <input
            placeholder="Add an item to your cart"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button>Add</button>
        </form>
      </main>
    </>
  );
}
