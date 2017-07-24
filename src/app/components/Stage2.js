import React, { Component } from 'react';
import {Page5, Page6} from './page'
const Swiper = window.Swiper;

class Stage2 extends Component {
  constructor (props) {
    super(props)
    this.state ={
      swiperV:undefined,
    }
  }
  componentDidMount() {
    let that = this;
    window.setTimeout(function(){
        new Swiper('.swiper-container-stage2', {
          onSlideChangeEnd: function(swiper) {
            that.setState({'swiperV':swiper});
          }
      },100);
    });

  }
  componentWillReceiveProps(nextProps) {
      console.log("receiver props stage2: "+this.props.flag+":"+ nextProps.flag);
    if(this.props.flag !== nextProps.flag && this.state.swiperV) {
      this.state.swiperV.slideTo(0);
    }

  }
  render() {

    return (
      <div className="swiper-slide">
        <div className="swiper-container swiper-container-stage2">
          <div className="swiper-wrapper">
            <Page5/>
            <Page6/>
          </div>
        </div>
      </div>
    )
  }
}

export default Stage2;
