import React, { Component } from 'react';
import './index.css';
import {Page1,Page2,Page3,Page4,Page11,Page12} from './page'
import { Stage1, Stage2, Stage3, Stage4} from './page'

const Swiper = window.Swiper;

class Index extends Component {
  constructor (props) {
    super(props)
    this.state ={
      stage1:true,
      stage2:true,
      stage3:true,
      stage4:true,
    }
  }
  componentDidMount() {
    // effect: 'cube',
    // grabCursor: true,
    // cube: {
    //   shadow: true,
    //   slideShadows: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94
    // },
    let that = this;
    window.setTimeout(function(){
      new Swiper('.swiper-container-v', {
        direction: 'vertical',
        onSlideChangeEnd: function(swiper) {
          console.log(swiper.activeIndex);
          if(swiper.activeIndex !== 2) {
            that.setState({'stage1':!that.state.stage1});
          }
          if(swiper.activeIndex !== 3) {
            console.log("!!:  "+that.state.stage2);
            that.setState({'stage2':!that.state.stage2});
          }
          if(swiper.activeIndex !== 4) {
            that.setState({'stage3':!that.state.stage3});
          }
          if(swiper.activeIndex !== 5) {
            that.setState({'stage4':!that.state.stage4});
          }
        }
      });
    },50);
    // console.log(swiperH);

    // console.log(this.state.stage1);
    // window.setTimeout(function(){
    //   swiperH.slideTo(2)
    // },1000);
  }
  render() {

    return (
      <div className="swiper-container swiper-container-v">
        <div className="swiper-wrapper">
          <Page1/>
          <Page2/>
          <Stage1 flag={this.state.stage1}/>
          <Stage2 flag={this.state.stage2}/>
          <Stage3 flag={this.state.stage3}/>
          <Stage4 flag={this.state.stage4}/>
          <Page11/>
          <Page12/>
        </div>
      </div>
    )
  }
}

export default Index
