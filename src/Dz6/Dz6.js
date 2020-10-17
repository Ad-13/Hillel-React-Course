import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import createStore from './redux/store';
import './Dz6.css';
import Header from './components/common/Header/Header';
import Sidebar from './components/common/Sidebar/Sidebar';
import Footer from './components/common/Footer/Footer';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Page404 from './components/Page404/Page404';

const store = createStore();

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup className="transition-group">
    <CSSTransition 
      key={location.key} 
      classNames="fade" 
      timeout={500}
    >
      <Switch location={location}>
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/products' exact component={Products} />
        <Route path='*' component={Page404} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function Dz6() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default Dz6;