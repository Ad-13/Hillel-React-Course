import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
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

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup className="transition-group">
    <CSSTransition 
      key={location.pathname.includes('/users') ? undefined : location.key} 
      classNames="fade" 
      timeout={500}
    >
      <Switch location={location}>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/posts' exact component={Posts} />
          <Route path='/users' exact component={Users} />
          <Route path='/users/:userId' exact component={Users} />
          <Route path='/users/:userId/albums' exact component={Albums} />
          <Route path='/albums' exact component={Albums} />
          <Route path='/albums/:albumId/photos' exact component={AlbumPhotos} />
          <Route path='*' component={Page404} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default function Dz5() {

  return (
    <Router>
      <div className='app'>
        <Header />
        <Sidebar />
        <div className='app-content'>
          <AnimatedSwitch />
        </div>
        <Footer />
      </div>
    </Router>
  )
}
