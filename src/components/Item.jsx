import styles from './Item.css';

export default function Item({ item }) {
  console.log(item.done);
  return (
    <>
      <input type="checkbox" checked={item.done} />
      <p style={{ margin: 0 }}>{item.item}</p>
    </>
  );
}
