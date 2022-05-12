import styles from './Item.css';
import { useState } from 'react';

export default function Item({ item, update }) {
  const [isEditing, setIsEditing] = useState(false);
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
      <p style={{ margin: 0 }} className={item.done ? styles.done : ''}>
        {item.item}
      </p>
    </>
  );
}
