import React, { Component } from 'react';
import Slideshow from '../Slideshow/Slideshow';

class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      detailImages: null,
      displaySlides: false,
    }

    this.toggleSlideShow = this.toggleSlideShow.bind(this);
  }

  // Open or close the slideshow that will lay over the hero image
  toggleSlideShow() {
    // Only update state if there are images to display in Slideshow
    if (this.props.item.images.length > 0){
      this.setState(prevState => ({
        displaySlides: !this.state.displaySlides
      }));
    }
  }

  render(props) {
    // If there are images other than the hero image for this product 
    // build a slideshow, if not render null and no slideshow will open
    const slideShow = this.props.item.images.length <= 0 
    ? null
    : (
      <div>
        <span className={"slide-close noselect" + (this.state.displaySlides ? 'visible': 'hidden')} onClick={!this.state.displaySlides ? null : this.toggleSlideShow}>x</span>
        <Slideshow images={this.props.item.images} />
      </div>
    );
    return (
    <li onClick={this.state.displaySlides ? null : this.toggleSlideShow}>
        <div className="item-wrapper">
            <div className="item-name">{this.props.item.name}</div>
            <img className="item-image" src={this.props.item.hero.href} />
            <div className="item-price">$ {this.props.item.priceRange.selling.high}</div>
            <div className={"slideshow " + (this.state.displaySlides ? 'visible': 'hidden')}>
              {slideShow}
            </div>
        </div>
    </li>
    );
  }
}

export default Product;