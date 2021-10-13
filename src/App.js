import './App.css'
import React from 'react'
import CleanReed from './img/CleanReed.svg'
import HomePage from './components/HomePage'
import AllPage from './components/AllPage'
import DTBPage from './components/DTBPage.js'
import ProgPage from './components/ProgPage'
import TLPage from './components/TLPage'
import ApPage from './components/ApPage'
import AboutPage from './components/AboutPage'

import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="">
                    <li>
                        <img
                            className="mainIcon"
                            alt="CleanReed-Icon"
                            src={CleanReed}
                        />
                    </li>
                    <BrowserRouter>
                        <Link to="/HomePage">
                            <li>Home</li>
                        </Link>

                        <Link to="/AllPage">
                            <li>General</li>
                        </Link>

                        <Link to="/ProgPage">
                            <li>Programming</li>
                        </Link>

                        <Link to="/DTBPage">
                            <li>Data Is Beautiful</li>
                        </Link>
                        <Link to="/TLPage">
                            <li>Today I Learned</li>
                        </Link>
                        <Link to="/ApPage">
                            <li>AstroPhotography</li>
                        </Link>
                        <Link to="/AboutPage">
                            <li>About</li>
                        </Link>
                        <br />
                        <br />

                        <br />

                        <Route path="/HomePage" component={HomePage} />
                        <Route path="/AllPage" component={AllPage} />
                        <Route path="/DTBPage" component={DTBPage} />
                        <Route path="/ProgPage" component={ProgPage} />
                        <Route path="/TLPage" component={TLPage} />
                        <Route path="/ApPage" component={ApPage} />
                        <Route path="/AboutPage" component={AboutPage} />
                    </BrowserRouter>
                </header>
            </div>
        )
    }
}

export default App
