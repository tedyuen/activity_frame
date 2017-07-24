import React, { Component } from 'react';
import './test.css';
const Swiper = window.Swiper;

class Test extends Component {
  componentDidMount() {
    var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        paginationClickable: true,
        spaceBetween: 50
    });

    window.setTimeout(function(){
      var swiperV = new Swiper('.swiper-container-v', {
          pagination: '.swiper-pagination-v',
          paginationClickable: true,
          direction: 'vertical',
          spaceBetween: 50
      });
    },100);
  }
  render() {

    return (
      <div className="swiper-container swiper-container-h">
        <div className="swiper-wrapper">
            <div className="swiper-slide">Horizontal Slide 1</div>
            <div className="swiper-slide">
                <div className="swiper-container swiper-container-v">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Vertical Slide 1</div>
                        <div className="swiper-slide">Vertical Slide 2</div>
                        <div className="swiper-slide">Vertical Slide 3</div>
                        <div className="swiper-slide">Vertical Slide 4</div>
                        <div className="swiper-slide">Vertical Slide 5</div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-v"></div>
                </div>
            </div>
            <div className="swiper-slide">Horizontal Slide 3</div>
            <div className="swiper-slide">Horizontal Slide 4</div>
        </div>
        <div className="swiper-pagination swiper-pagination-h"></div>
      </div>

    )
  }
}

export default Test;
