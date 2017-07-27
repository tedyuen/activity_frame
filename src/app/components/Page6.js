import React, { Component } from 'react';
import './index.css';
import '../style/page6.css'
import img1 from '../images/page6/1.png'
import img2 from '../images/page6/2.png'
import pointWhite from '../images/point_white.png'
import upArrow from '../images/up_arrow.png'


class Page6 extends Component {

  render() {

    return (
      <div className="swiper-slide img img-6">
        <img src={img1} alt="img1" className="img-page6-1 ani2" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeIn use swing during 600"/>
        <img src={img2} alt="img2" className="img-page6-2 ani2" style={{visibility:'hidden'}} data-slide-in="at 500 from fadeIn use swing during 800"/>
        <img src={pointWhite} alt="pointWhite" className="img-point-new ani2" onClick={this.props.goForm} style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInUp use swing during 800"/>
        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page6;
