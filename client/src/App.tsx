import React from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import './App.css';
import Discover from "./pages/Discover/Discover";
import Header from "./components/Header/Header";
import Navigations from "./components/Navigation/Navigations";
import InTrend from "./pages/InTrend/InTrend";
import Playlist from "./pages/Playlist/Playlist";
import PlaylistVideo from "./pages/PlaylistVideo/PlaylistVideo";
import VideoPage from "./pages/VideoPage/VideoPage";
import CategoriesPage from "./pages/Categories/CategoriesPage";

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

                  <Route path="/video/:videoId" element={<VideoPage />} />
                  <Route path="/playlist/:playlistId" element={<PlaylistVideo />} />

                <Route path="/tutorials" element={<CategoriesPage title='Tutorials' />} />
                <Route path="/competition" element={<CategoriesPage title='Competition' />} />
                <Route path="/review" element={<CategoriesPage title='Review' />} />
                <Route path="/skating" element={<CategoriesPage title='Skating' />} />
                <Route path="/other" element={<CategoriesPage title='Other' />} />

                </Routes>
              </main>

              </BrowserRouter>
      </div>
  );
}

export default App;
