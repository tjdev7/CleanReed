import { render, screen } from '@testing-library/react';
import ApPage from './components/ApPage.js';

test('Renders component and <li> items with no errors', () => {
  render(<ApPage />);
});
