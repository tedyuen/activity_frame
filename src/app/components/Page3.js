import React, { Component } from 'react';
import './index.css';
import '../style/page3.css'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import img1 from '../images/page3/1.png'
import pointWhite from '../images/point_white.png'

class Page3 extends Component {
  componentDidMount() {

  }
  render() {

    return (
      <div data-hash="page3" className="swiper-slide img img-3">
        <div className="video">
          <Video loop muted
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              onCanPlayThrough={() => {
                  // Do stuff
              }}
              className="">
              <source src="http://ultra.ithooks.com:9090/activity_frame/mp4/nemo.mp4" type="video/mp4" />
          </Video>
        </div>

        <img src={img1} alt="img1" className="img-page3-1 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInUp use swing during 800"/>
        <img src={pointWhite} alt="pointWhite" className="img-page3-2 ani" onClick={this.props.goForm} style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInLeft use swing during 800"/>
      </div>
    )
  }
}

export default Page3;
