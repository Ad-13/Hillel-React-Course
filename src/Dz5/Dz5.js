import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Dz5.css';
import Header from './modules/common/header/Header';
import Sidebar from './modules/common/sidebar/Sidebar';
import Footer from './modules/common/footer/Footer';
import Users from './modules/Users/Users';
import Page404 from './modules/Page404/Page404';
import About from './modules/About/About';
import Home from './modules/Home/Home';
import Posts from './modules/Posts/Posts';
import Albums from './modules/Albums/Albums';
import AlbumPhotos from './modules/AlbumPhotos/AlbumPhotos';

export default function Dz5() {

  return (
    <Router>
      <div className='app'>
        <Header />
        <Sidebar />
        <div className='app-content'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/users/:userId/albums' exact>
              <Albums />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/posts' exact>
              <Posts />
            </Route>
            <Route path='/albums' exact>
              <Albums />
            </Route>
            <Route path='/albums/:albumId/photos' exact>
              <AlbumPhotos />
            </Route>
            <Route path='*'>
              <Page404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
