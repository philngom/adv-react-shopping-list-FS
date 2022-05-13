import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should should able to add items to your cart, cart counter tracks # of items', () => {
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
  });

  it('should update item in cart', () => {
    const input = screen.getByRole('textbox');

    const addItemButton = screen.getByRole('button', {
      name: /add/i,
    });

    userEvent.type(input, 'potatoes');
    userEvent.click(addItemButton);

    const itemToUpdate = screen.getByRole('list');

    const editButton = within(itemToUpdate).getByRole('button', {
      name: /edit/i,
    });

    userEvent.click(editButton);

    const inputOfItemToUpdate = within(itemToUpdate).getByRole('textbox');

    //clear input's value since it will contain 'potatoes' once user hits edit button
    inputOfItemToUpdate.value = '';

    userEvent.type(inputOfItemToUpdate, 'one potato');

    const updateButton = within(itemToUpdate).getByRole('button', {
      name: /update/i,
    });

    userEvent.click(updateButton);

    screen.getByText(/one potato/i);
  });
});
