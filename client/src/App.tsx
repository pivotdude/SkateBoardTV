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

import Channel from "./pages/Channel/Channel";
import ChannelVideos from "./pages/Channel/ChannelVideos";
import ChannelPlaylists from "./pages/Channel/ChannelPlaylists";
import ChannelLikes from "./pages/Channel/ChannelLikes";
import ChannelSubscriptions from "./pages/Channel/ChannelSubscriptions";
import ChannelAbout from "./pages/Channel/ChannelAbout";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import NotFound from "./pages/404/NotFound";
import Review from "./pages/Review/Review";
import Skating from "./pages/Skating/Skating";
import Other from "./pages/Other/Other";
import Competition from "./pages/Competition/Competition";
import Tutorials from "./pages/Tutorials/Tutorials";
import {useSelector} from "react-redux";
import {StateModel} from "./Models";
import Modal from "./components/Modal/Modal";
import Studio from "./pages/Studio/Studio";
import Viewed from "./pages/Viewed/Viewed";
import ChannelViewed from "./pages/Channel/ChannelViewed";

function App() {

    const modal = useSelector((state: StateModel) => state.app.modal)

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


                  <Route path="/tutorials" element={<Tutorials />} />
                  <Route path="/competition" element={<Competition />} />
                  <Route path="/review" element={<Review />} />
                  <Route path="/skating" element={<Skating  />} />

                  <Route path="/channel/:channelId/" element={<Channel />} />
                  <Route path="/channel/:channelId/videos" element={<ChannelVideos />} />
                  <Route path="/channel/:channelId/playlists" element={<ChannelPlaylists />} />
                  <Route path="/channel/:channelId/likes" element={<ChannelLikes />} />
                  <Route path="/channel/:channelId/viewed" element={<ChannelViewed />} />
                  <Route path="/channel/:channelId/subscribes" element={<ChannelSubscriptions />} />
                  <Route path="/channel/:channelId/about" element={<ChannelAbout />} />


                  <Route path="/login" element={<Login />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/studio" element={<Studio />} />
                  <Route path="/viewed" element={<Viewed />} />

                  <Route path="/*" element={<div className='container'> <NotFound /> </div>} />
                </Routes>


                  {modal.show && <Modal message={modal.message} />}
              </main>

              </BrowserRouter>
      </div>
  );
}

export default App;
