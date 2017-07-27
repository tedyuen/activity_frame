import React, { Component } from 'react';
import './index.css';
import '../style/page3.css'
import img1 from '../images/page3/1.png'
import pointWhite from '../images/point_white.png'
import point1 from '../images/point_1.png'
import upArrow from '../images/up_arrow.png'

class Page3 extends Component {

  render() {

    return (
      <div data-hash="page3" className="swiper-slide img img-3">
        <iframe frameborder="no" className="video" src="https://v.qq.com/iframe/player.html?vid=s0527eboc2b&tiny=0&auto=0" allowfullscreen></iframe>
        <img src={img1} alt="img1" className="img-page3-1 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInUp use swing during 800"/>
        <img src={pointWhite} alt="pointWhite" className="img-point-new ani" onClick={this.props.goForm} style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInUp use swing during 800"/>
        <img src={point1} alt="point1" className="img-point1 ani" onClick={this.props.goForm} style={{visibility:'hidden'}} data-slide-in="at 500 from fadeInRight use swing during 1500" data-slide-out="at -200 to fadeOutLeft use swing during 1500 force"/>
        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page3;
