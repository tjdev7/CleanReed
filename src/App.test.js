import { render, screen } from '@testing-library/react'
import App from './App.js'

test('Renders BrowserRouter with different routes with no issues', () => {
    render(<App />)
})
screen.debug()
