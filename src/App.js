import React from 'react'

import './App.css'

import MoviesSub from './components/subreddits/MoviesSub.js'
import FunnySub from './components/subreddits/FunnySub.js'
import MusicSub from './components/subreddits/MusicSub.js'
import PicsSub from './components/subreddits/PicsSub.js'
import ScienceSub from './components/subreddits/ScienceSub.js'
import VideosSub from './components/subreddits/VideosSub.js'
import WorldNewsSub from './components/subreddits/WorldNewsSub.js'

// import SearchBar from './components/SearchBar.js'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="headerStyle">
                    <h1 className="AppTitle">CleanReed</h1>

                    <label className="subTitleStyling">
                        A minimalist React UI tool for browsing Reddit
                    </label>
                    <br />
                    <label className="subTitleStyling">
                        Choose any of the subreddits below to start browsing
                    </label>
                    <hr />
                    <br />

                    <BrowserRouter>
                        <Link to="/moviesSub">
                            <li className="menuItem">Movies</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/FunnySub">
                            <li className="menuItem">Funny</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/MusicSub">
                            <li className="menuItem">Music</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/PicsSub">
                            <li className="menuItem">Pics</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/ScienceSub">
                            <li className="menuItem">Science</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/VideosSub">
                            <li className="menuItem">Videos</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/WorldNewsSub">
                            <li className="menuItem">World News</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <span className="headerBar"> | </span>
                        <a href={'https://github.com/tjdev7/CleanReed'}>
                            <li className="menuItem">GitHub Repo</li>
                        </a>{' '}
                        <Routes>
                            <Route path="/MoviesSub" element={<MoviesSub />} />
                        </Routes>
                        <Routes>
                            <Route path="/FunnySub" element={<FunnySub />} />
                        </Routes>
                        <Routes>
                            <Route path="/MusicSub" element={<MusicSub />} />
                        </Routes>
                        <Routes>
                            <Route path="/PicsSub" element={<PicsSub />} />
                        </Routes>
                        <Routes>
                            <Route
                                path="/ScienceSub"
                                element={<ScienceSub />}
                            />
                        </Routes>
                        <Routes>
                            <Route path="/VideosSub" element={<VideosSub />} />
                        </Routes>
                        <Routes>
                            <Route
                                path="/WorldNewsSub"
                                element={<WorldNewsSub />}
                            />
                        </Routes>
                    </BrowserRouter>
                </header>
                <hr />
            </div>
        )
    }
}

export default App
