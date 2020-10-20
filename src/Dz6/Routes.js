import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Page404 from './components/Page404/Page404';

export const Routes = withRouter(({ location }) => (
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
