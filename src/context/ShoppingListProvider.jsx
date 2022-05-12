import { createContext, useContext, useReducer } from 'react';

const initialState = [];

const reducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          item: action.payload.item,
          done: false,
        },
      ];
    case 'UPDATE':
      return state.map((item) => {
        if (item.id === action.payload.item.id) {
          return {
            ...action.payload.item,
          };
        } else {
          return item;
        }
      });
    default:
      throw new Error('In reducer function');
  }
};

const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD', payload: { item } });
  };

  const update = (item) => {
    dispatch({ type: 'UPDATE', payload: { item } });
  };

  return (
    <ShoppingListContext.Provider value={{ addItem, state, update }}>
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
