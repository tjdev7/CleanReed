import React from 'react'

import './App.css'

import SearchBar from './components/SearchBar.js'
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="headerStyle">
                    <h1 className="AppTitle">CleanReed</h1>
                    <a href={'https://github.com/tjdev7/CleanReed'}>
                        <li className="menuItem">README</li>
                    </a>{' '}
                    <a
                        href={
                            'https://github.com/tjdev7/CleanReed/tree/main/docs'
                        }
                    >
                        <li className="menuItem">Docs</li>
                    </a>{' '}
                </header>
                <br />
                <br />

                <SearchBar />

                <br />
                <br />
            </div>
        )
    }
}

export default App
