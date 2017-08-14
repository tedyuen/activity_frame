import React, { Component } from 'react';
import './index.css';
import '../style/page11.css'
import img1 from '../images/page11/1.png'
import Item from './form/Item'
import Input from './form/Input'
import imgItem1C from '../images/item/item_1_check.png'
import imgItem1U from '../images/item/item_1_uncheck.png'
import imgItem2C from '../images/item/item_2_check.png'
import imgItem2U from '../images/item/item_2_uncheck.png'
import imgItem3C from '../images/item/item_3_check.png'
import imgItem3U from '../images/item/item_3_uncheck.png'
import imgItem4C from '../images/item/item_4_check.png'
import imgItem4U from '../images/item/item_4_uncheck.png'
import img2 from '../images/page4/1.png'
import upArrow from '../images/up_arrow.png'
const $ = window.$
class Page11 extends Component {
  constructor(props) {
    super(props)
    this.changeImg = this.changeImg.bind(this)
    this.getImg = this.getImg.bind(this)
    this.state = {
      currentItem:-1,
      items:[
        imgItem1U,
        imgItem2U,
        imgItem3U,
        imgItem4U
      ]
    }
    this.handleGoClick = this.handleGoClick.bind(this)
  }

  getImg(index) {
    return this.state.items[index]
  }
  changeImg(index) {
    this.setState({'currentItem':index});
    let temp = [
      index==0?imgItem1C:imgItem1U,
      index==1?imgItem2C:imgItem2U,
      index==2?imgItem3C:imgItem3U,
      index==3?imgItem4C:imgItem4U,
    ]
    this.setState({'items':temp});
  }

  componentDidMount() {
    window.setTimeout(function(){
      $('.img-page11-1').css('height',$('.img-page11-1').width()*0.4475)
    },100);
  }
  handleGoClick() {
    let name = this.refs.name.value;
    let mobile = this.refs.mobile.value;
    let legoId = this.state.currentItem;
    if(legoId == -1){
      alert('请选择主题');
    }else if(name.trim() == '') {
      alert('请输入姓名');
    }else if(mobile.trim() == ''){
      alert('请输入联系方式')
    }else{
      $.ajax({
        type:'post',
        url:'http://optest.reachmedia.cn:8084/sch/lego/add.do',
        data:{name:name,legoId:legoId,mobile:mobile},//这里不是json，是表单参数
        success:function(data){
          console.log(data);
          alert('提交成功');
        },
        complete:function(XMLHttpRequest, textStatus){
          console.log('complete');
        },
        error:function(){
          console.log('error');
        }
      });
    }
    console.log(legoId+":"+name+":"+mobile);
  }
  render() {

    return (
      <div className="swiper-slide img img-11">
        <img src={img2} alt="img2" className="img-page4-1 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeIn use swing during 600"/>

        <div className="page11-top">

          <img src={img1} alt="img1" className="img-page11-1 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInDown use swing during 800"/>
          <div className="page11-form">
            <Item className="item r ani" imgSrc={this.getImg(1)} onChange={this.changeImg} dataIndex="1" dataSlideIn="at 0 from fadeInLeft use swing during 800"/>
            <Item className="item ani" imgSrc={this.getImg(0)} onChange={this.changeImg} dataIndex="0" dataSlideIn="at 0 from fadeInRight use swing during 800"/>
            <Item className="item r ani" imgSrc={this.getImg(2)} onChange={this.changeImg} dataIndex="2" dataSlideIn="at 0 from fadeInLeft use swing during 800"/>
            <Item className="item ani" imgSrc={this.getImg(3)} onChange={this.changeImg} dataIndex="3" dataSlideIn="at 0 from fadeInRight use swing during 800"/>
          </div>
          <div className="input-frame ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInUp use swing during 800">
            <div className="input-div">
              <input type="text" ref="name" placeholder="姓名"/>
            </div>
            <div className="input-div">
              <input type="tel" ref="mobile" placeholder="联系方式"/>
            </div>
          </div>
          <div className="btn-submit ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInUp use swing during 800" onClick={this.handleGoClick}>提交</div>
        </div>

        <img src={upArrow} alt="upArrow" className="up-arrow"/>
      </div>
    )
  }
}

export default Page11;
