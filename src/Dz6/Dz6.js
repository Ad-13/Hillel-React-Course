import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createStore from './redux/store';
import './Dz6.css';
import { Routes } from './Routes';
import Header from './components/common/Header/Header';
import Sidebar from './components/common/Sidebar/Sidebar';
import Footer from './components/common/Footer/Footer';

const store = createStore();

function Dz6() {
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Header />
          <Sidebar />
          <div className='app-content'>
            <Routes />
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default Dz6;