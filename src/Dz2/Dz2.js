import React, { Component } from 'react';
import './Dz2.css';
import Header from './modules/common/header/Header';
import Footer from './modules/common/footer/Footer';
import Glider  from './shared/libs/Glider';
import { TextField  } from '@material-ui/core';

export default class Dz2 extends Component {
  state = {
    gliderSettings: {
      perView: 3
    }
  };

  changeOptionsPerView = e => {
    const gliderSettings = Object.assign({}, this.state.gliderSettings);
    gliderSettings.perView = e.target.value;
    this.setState({ gliderSettings: gliderSettings })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          <div className="options-per-view">
            <TextField className="input"
              value={this.state.gliderSettings.perView}
              type="number"
              variant="outlined"
              label="Slides per view:" 
              onChange={this.changeOptionsPerView}
            />
          </div>
          <Glider settings={this.state.gliderSettings}>
            <div className="slide-item">
              <img className="img" src="https://s3.us-west-2.amazonaws.com/www.sysimg.com/07/153881489088224038.jpg" alt=""/>
            </div>
            <div className="slide-item">
              <img className="img" src="https://nozheman.club/uploads/derevyannaya-katana-640x480-be7.jpg" alt=""/>
            </div>
            <div className="slide-item">
              <img className="img" src="https://images.ua.prom.st/1049999484_w640_h640_yaponskaya-katana-samuraj.jpg" alt=""/>
            </div>
            <div className="slide-item">
              <img className="img" src="https://wartools.ru/images/intro/katanta2205_katana.jpg" alt=""/>
            </div>
            <div className="slide-item">
              <img className="img" src="https://images.ontheedgebrands.com/cdn-cgi/image/height=1000,width=1000,quality=60/images/A43-BK906T.jpg" alt=""/>
            </div>
            <div className="slide-item">
              <img className="img" src="https://www.darksword-armory.com/wp-content/uploads/2018/07/the-vindaaris-sword-fantasy-medieval-weapon-1328-darksword-armory-13-600x400.jpg" alt=""/>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
              <button className="glide__bullet" data-glide-dir="=0"></button>
              <button className="glide__bullet" data-glide-dir="=1"></button>
              <button className="glide__bullet" data-glide-dir="=2"></button>
            </div>
          </Glider>
        </div>
        <Footer />
      </div>
    )
  }
}
