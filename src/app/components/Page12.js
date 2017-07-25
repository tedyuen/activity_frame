import React, { Component } from 'react';
import './index.css';
import '../style/page12.css'
import img1 from '../images/page12/1.png'
import img2 from '../images/page12/2.png'
import img3 from '../images/page12/3.png'
class Page12 extends Component {

  render() {

    return (
      <div className="swiper-slide img img-12">
        <img src={img1} alt="img1" className="img-page12-1 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeIn use swing during 800"/>
        <img src={img2} alt="img2" className="img-page12-2 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInUp use swing during 800"/>
        <img src={img3} alt="img3" className="img-page12-3 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInUp use swing during 800"/>
      </div>
    )
  }
}

export default Page12;
