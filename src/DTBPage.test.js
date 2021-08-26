import { render, screen } from '@testing-library/react';
import DTBPage from './components/DTBPage.js';

test('Renders component and <li> items with no errors', () => {
  render(<DTBPage />);
});
