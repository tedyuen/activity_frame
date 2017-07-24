import React, { Component } from 'react';
import {Page7, Page8} from './page'
const Swiper = window.Swiper;
class Stage3 extends Component {
  constructor (props) {
    super(props)
    this.state ={
      swiperV:undefined,
    }
  }
  componentDidMount() {
    let that = this;
    let swiperV = new Swiper('.swiper-container-stage3', {
      onSlideChangeEnd: function(swiper) {
        that.setState({'swiperV':swiper});
      }
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
        <div className="swiper-container swiper-container-stage3">
          <div className="swiper-wrapper">
            <Page7/>
            <Page8/>
          </div>
        </div>
      </div>
    )
  }
}

export default Stage3;
