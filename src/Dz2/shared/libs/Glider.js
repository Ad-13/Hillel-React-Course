import React, { Component } from 'react'
import Glide from '@glidejs/glide'
import '../../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'

export default class Glider  extends Component {
  $glideElRef = {};
  glideRef = {};

  constructor(props) {
    super(props);

    this.$glideElRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.$glideElRef);
    this.glideRef = new Glide(this.$glideElRef.current, this.props.settings).mount();
  }
  
  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate');
    if (JSON.stringify(this.props.settings) !== JSON.stringify(prevProps.settings) ) {
      this.glideRef.update(this.props.settings);
    }
  }
  
  componentWillUnmount() {
    this.glideRef.destroy();
  }

  render() {
    return (
      <>
        <div className="glide" ref={this.$glideElRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {this.props.children
                .filter(x => !x.props['data-glide-el'])
                .map((x, i) => <li className="glide__slide" key={i}>{x}</li>)}
            </ul>
          </div>
            {this.props.children
              .filter(x => x.props['data-glide-el'] === "controls")
              .map(x => x)}
            {this.props.children
              .filter(x => x.props['data-glide-el'] === "controls[nav]")
              .map(x => x)}
        </div>
      </>
    )
  }
}
