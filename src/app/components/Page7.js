import React, { Component } from 'react';
import './index.css';
import '../style/page7.css'
import img1 from '../images/page7/1.png'
import pointWhite from '../images/point_blue.png'



class Page7 extends Component {

  render() {

    return (
      <div className="swiper-slide img img-7">
        <img src={img1} alt="img1" className="img-page7-1 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInRight use swing during 800"/>
        <img src={pointWhite} alt="pointWhite" className="img-page7-2 ani" onClick={this.props.goForm} style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInRight use swing during 800"/>

      </div>
    )
  }
}

export default Page7;
