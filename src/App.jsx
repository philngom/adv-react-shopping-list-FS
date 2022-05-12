import ShoppingList from './views/ShoppingList';
import { ShoppingListProvider } from './context/ShoppingListProvider';

export default function App() {
  return (
    <ShoppingListProvider>
      <ShoppingList />
    </ShoppingListProvider>
  );
}
