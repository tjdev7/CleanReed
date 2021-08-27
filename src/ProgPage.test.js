import { render, screen } from '@testing-library/react';
import ProgPage from './components/ProgPage.js';

test('Renders component and <li> items with no errors', () => {
  render(<ProgPage />);
});
