import styles from './Item.css';
import { useState } from 'react';

export default function Item({ item, update, deleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updateItem, setUpdateItem] = useState(item.item);

  const handleItemUpdate = (e) => {
    e.preventDefault();
    update({
      ...item,
      item: updateItem,
    });
    setIsEditing(false);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          update({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {isEditing ? (
        <>
          <form onSubmit={(e) => handleItemUpdate(e)}>
            <input
              value={updateItem}
              onChange={(e) => setUpdateItem(e.target.value)}
            />
            <button aria-label="update" type="submit">
              Update
            </button>
          </form>
        </>
      ) : (
        <>
          <p style={{ margin: 0 }} className={item.done ? styles.done : ''}>
            {item.item}
          </p>
          <button aria-label="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
      <button aria-label="delete" onClick={() => deleteItem(item)}>
        Delete
      </button>
    </>
  );
}
