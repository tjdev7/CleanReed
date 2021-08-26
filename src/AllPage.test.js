import { render, screen } from '@testing-library/react';
import AllPage from './components/AllPage.js';

test('Renders component and <li> items with no errors', () => {
  render(<AllPage />);
});
