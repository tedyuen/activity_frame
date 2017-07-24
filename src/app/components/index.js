import React, { Component } from 'react';
import './index.css';
import {Page1,Page2,Page11,Page12} from './page'
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
    let that = this;
    window.setTimeout(function(){
      new Swiper('.swiper-container-v', {
        direction: 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
          window.swiperAnimateCache(swiper); //隐藏动画元素
          window.swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
          window.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
          if(swiper.activeIndex !== 2) {
            that.setState({'stage1':!that.state.stage1});
          }
          if(swiper.activeIndex !== 3) {
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
