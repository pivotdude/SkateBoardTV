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

import Channel from "./pages/Channel/Channel";
import ChannelVideos from "./pages/Channel/ChannelVideos";
import ChannelPlaylists from "./pages/Channel/ChannelPlaylists";
import ChannelLikes from "./pages/Channel/ChannelLikes";
import ChannelSubscribes from "./pages/Channel/ChannelSubscribes";
import ChannelAbout from "./pages/Channel/ChannelAbout";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";

function App() {
  return (
      <div className='app'>
          <BrowserRouter>
              <Header />

              <main>
                  <Navigations />

                <Routes>

                  <Route path="/" element={<Discover />} />
                  <Route path="/trending" element={<InTrend />} />
                  <Route path="/playlist" element={<Playlist />} />

                  <Route path="/video/:videoId" element={<VideoPage />} />
                  <Route path="/playlist/:playlistId" element={<PlaylistVideo />} />


                  <Route path="/tutorials" element={<CategoriesPage title='Tutorials' />} />
                  <Route path="/competition" element={<CategoriesPage title='Competition' />} />
                  <Route path="/review" element={<CategoriesPage title='Review' />} />
                  <Route path="/skating" element={<CategoriesPage title='Skating' />} />
                  <Route path="/other" element={<CategoriesPage title='Other' />} />

                  <Route path="/channel/:channelId/" element={<Channel />} />
                  <Route path="/channel/:channelId/videos" element={<ChannelVideos />} />
                  <Route path="/channel/:channelId/playlists" element={<ChannelPlaylists />} />
                  <Route path="/channel/:channelId/likes" element={<ChannelLikes />} />
                  <Route path="/channel/:channelId/subscribes" element={<ChannelSubscribes />} />
                  <Route path="/channel/:channelId/about" element={<ChannelAbout />} />


                  <Route path="/login" element={<Login />} />
                  <Route path="/registration" element={<Registration />} />

                </Routes>
              </main>

              </BrowserRouter>
      </div>
  );
}

export default App;
