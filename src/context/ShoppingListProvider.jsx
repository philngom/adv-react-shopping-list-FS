import { createContext, useContext, useReducer } from 'react';

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

const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'add', payload: { item } });
  };

  return (
    <ShoppingListContext.Provider value={{ addItem, state }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);

  if (!context)
    throw new Error(
      'useShoppingList must be called from within ShoppingListProvider'
    );

  return context;
};
