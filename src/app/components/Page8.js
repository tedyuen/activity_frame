import React, { Component } from 'react';
import './index.css';
import '../style/page8.css'
import img1 from '../images/page8/1.png'
import img2 from '../images/page8/2.png'

class Page8 extends Component {

  render() {

    return (
      <div className="swiper-slide img img-8">
        <img src={img1} alt="img1" className="img-page8-1 ani2" style={{visibility:'hidden'}} data-slide-in="at 0 from flipInY use swing during 800"/>
        <img src={img2} alt="img2" className="img-page8-2 ani2" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeIn use swing during 800"/>
      </div>
    )
  }
}

export default Page8;
