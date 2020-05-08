import React from 'react';
import configureMockStore from 'redux-mock-store';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';

afterEach(() => {
  cleanup();
});

const mockStore = configureMockStore();

const store = mockStore({
  a: 'b',
});

test('renders homepage', () => {
  const { getByText, debug } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const title = getByText('Good Eats');
  expect(title).toBeInTheDocument();
  debug();
});
