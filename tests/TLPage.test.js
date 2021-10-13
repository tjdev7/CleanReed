import { render, screen } from '@testing-library/react'
import TLPage from './components/TLPage.js'

test('Renders component and <li> items with no errors', () => {
    render(<TLPage />)
})
