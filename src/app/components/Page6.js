import React, { Component } from 'react';
import './index.css';
import '../style/page6.css'
import img1 from '../images/page6/1.png'
import img2 from '../images/page6/2.png'

class Page6 extends Component {

  render() {

    return (
      <div className="swiper-slide img img-6">
        <img src={img1} alt="img1" className="img-page6-1 ani2" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeIn use swing during 600"/>
        <img src={img2} alt="img2" className="img-page6-2 ani2" style={{visibility:'hidden'}} data-slide-in="at 500 from fadeIn use swing during 800"/>
      </div>
    )
  }
}

export default Page6;
