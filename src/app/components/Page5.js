import React, { Component } from 'react';
import './index.css';
import '../style/page5.css'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import img1 from '../images/page5/1.png'


class Page5 extends Component {

  render() {

    return (
      <div className="swiper-slide img img-5">
        <div className="video">
          <Video loop muted
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              onCanPlayThrough={() => {
                  // Do stuff
              }}
              className="">
              <source src="http://ultra.ithooks.com:9090/activity_frame/mp4/frozen.mp4" type="video/mp4" />
          </Video>
        </div>
        <img src={img1} alt="img1" className="img-page5-1 ani" style={{visibility:'hidden'}} data-slide-in="at 0 from fadeInLeft use swing during 800"/>


      </div>
    )
  }
}

export default Page5;
