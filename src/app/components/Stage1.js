import React, { Component } from 'react';
import {Page3, Page4} from './page'
const Swiper = window.Swiper;
class Stage1 extends Component {
  constructor (props) {
    super(props)
    this.state ={
      swiperV:undefined,
    }
  }
  componentDidMount() {
    let that = this;
    window.setTimeout(function(){
        new Swiper('.swiper-container-stage1', {
          onSlideChangeEnd: function(swiper) {
            that.setState({'swiperV':swiper});
          }
      },100);
    });

  }
  componentWillReceiveProps(nextProps) {
    if(this.props.flag !== nextProps.flag && this.state.swiperV) {
      this.state.swiperV.slideTo(0);
    }

  }
  render() {

    return (
      <div className="swiper-slide">
        <div className="swiper-container swiper-container-stage1">
          <div className="swiper-wrapper">
            <Page3/>
            <Page4/>
          </div>
        </div>
      </div>
    )
  }
}

export default Stage1;
