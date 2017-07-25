import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.getAlt = this.getAlt.bind(this);
  }
  renderImg() {
    return (
      <img src={this.props.imgSrc} alt={this.getAlt()} className="item-img"/>
    )
  }
  getAlt(){
    return 'item-'+this.props.dataIndex
  }

  onChange(){
    this.props.onChange(this.props.dataIndex)
  }

  render(){
    return (
      <div className={this.props.className} onClick={this.onChange} style={{visibility:'hidden'}} data-slide-in={this.props.dataSlideIn}>
        {this.renderImg()}
      </div>
    )
  }
}

export default Item
