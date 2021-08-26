import { render, screen } from '@testing-library/react';
import AboutPage from './components/AboutPage.js';

test('Renders component and <li> items with no errors', () => {
  render(<AboutPage />);
});
