import { render, screen } from '@testing-library/react';
import App from './App.js';

test('Renders BrowserRouter list with no issues', () => {
  render(<App />);
});
