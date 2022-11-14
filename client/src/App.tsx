import React from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Discover from "./pages/Discover/Discover";
import Header from "./components/Header/Header";
import Navigations from "./components/Navigation/Navigations";
import InTrend from "./pages/InTrend/InTrend";
import Playlist from "./pages/Playlist/Playlist";
import Competition from "./pages/Competion/Competition";
import Tutorials from "./pages/Tutorials/Tutorials";
import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  return (
      <div className='app'>

          <BrowserRouter>
              <Header />

              <main>
                  <Navigations />
                <Routes>
                  <Route path="/" element={<Discover />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/trending" element={<InTrend />} />
                  <Route path="/playlist" element={<Playlist />} />
                  <Route path="/tutorials" element={<Tutorials />} />
                  <Route path="/competition" element={<Competition />} />
                  <Route path="/video/:videoid" element={<VideoPage />} />
                </Routes>
              </main>

              </BrowserRouter>
      </div>
  );
}

export default App;
