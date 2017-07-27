import React, { Component } from 'react';
import './index.css';
import '../style/page2.css'
import logoImg from '../images/page2/logo.png'
import img2 from '../images/page2/2.jpg'
import img3 from '../images/page2/3.png'
import upArrow from '../images/up_arrow.png'
const $ = window.$
class Page2 extends Component {
  componentDidMount() {
    window.setTimeout(function(){
      $('.img-page2-1').css('height',$('.img-page2-2').height());
    },200);
  }
  render() {

    return (
      <div data-hash="page2" className="swiper-slide img img-2">
        <img src={logoImg} alt="imgLogo" className="ani img-page2-logo" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInRight use swing during 800"/>
        <div className="img-page2-1"></div>
        <img src={img2} alt="img2" className="img-page2-2 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInLeft use swing during 800"/>
        <img src={img3} alt="img3" className="img-page2-3 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from zoomIn use swing during 800"/>

        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page2;
