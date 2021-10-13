import { render, screen } from '@testing-library/react'
import HomePage from './components/HomePage.js'

test('Renders home text with no errors', () => {
    render(<HomePage />)
})
