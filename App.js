import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './Components/Feed.js'
import VideoDetail from './Components/VideoDetail.js'
import ChannelDetail from './Components/ChannnelDetail.js'
import SearchFeed from './Components/SearchFeed.js'
import SearchBar from './Components/SearchBar.js'
import './App.css';

const App = () => {
  return (
    <BrowserRouter >
      <div className='app-container'>

        <header className='header d-flex'>
          <nav className=' header-links'>

            <img src='youtube.png' alt='' />

            <SearchBar />

          </nav>
        </header>

        <main>

          <Routes>

            <Route exact path="/" element={<Feed />}></Route>
            <Route path="/Video/:id" element={<VideoDetail />}></Route>
            <Route path="/channel/:id" element={<ChannelDetail />}></Route>
            <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>

          </Routes>

        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;