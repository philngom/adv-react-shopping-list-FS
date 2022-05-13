import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should should able to add, delete, and update items to your cart, cart counter tracks # of items', () => {
    screen.getByRole('heading', { name: /shopping list/i });

    screen.getByText(/cart \(0\)/i);

    const input = screen.getByRole('textbox');

    const addItemButton = screen.getByRole('button', {
      name: /add/i,
    });

    userEvent.type(input, 'potatoes');
    userEvent.click(addItemButton);

    userEvent.type(input, 'oranges');
    userEvent.click(addItemButton);

    userEvent.type(input, 'bananas');
    userEvent.click(addItemButton);

    screen.getByText(/cart \(3\)/i);

    const itemToUpdate = screen.getByText('bananas');
    screen.debug(itemToUpdate);
  });
});
