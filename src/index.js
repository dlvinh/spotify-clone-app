import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { store } from './Redux/Config';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Playlist from './Components/Playlist';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter>
    <Routes>
      <Route path='/#' element={<App></App>}></Route>
      <Route path='/' element={<App></App>}></Route>
      <Route path='/playlists/:playlistId' element={<Playlist></Playlist>}></Route>
    </Routes>
    {/* <App></App> */}
    </BrowserRouter>

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
