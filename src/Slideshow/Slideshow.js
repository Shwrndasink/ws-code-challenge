import React, { Component } from 'react';

class Slideshow extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeSlide: 0,
    }
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  // Select the next previous in the array, or display the last image
  moveLeft() {
        if (this.state.activeSlide === 0) {
            this.setState(prevState => ({
                activeSlide: this.props.images.length - 1
            }));
        } else {
            this.setState(prevState => ({
                activeSlide: this.state.activeSlide - 1
            }));
        }
  }

  // Select the next image in the array, or display the first image
  moveRight() {
        if (this.state.activeSlide === this.props.images.length - 1) {
            this.setState(prevState => ({
                activeSlide: 0
            }));
        } else {
            this.setState(prevState => ({
                activeSlide: this.state.activeSlide + 1
            }));
        }
    }

  render() {
    const slidePosition = this.props.images.map((image, index) => {
        return <div className={"slide-nav-dot " + (this.state.activeSlide === index ? 'fill' : '')} data-index={index} key={index++}></div>
    });
    return (
        <div>
            <div className="slide-controls-wrapper">
                <span className="slide-arrow left noselect" dangerouslySetInnerHTML={{ __html: "<" }} onClick={this.moveLeft}></span>
                <span className="slide-arrow right noselect" dangerouslySetInnerHTML={{ __html: ">" }} onClick={this.moveRight}></span>
            </div>
            <div className="slide-wrapper">
                <div className="slide-image-container">
                    <img className="slide-image" src={this.props.images[this.state.activeSlide].href} alt={this.props.images[this.state.activeSlide].name} />
                </div>
            </div>

            <div className="slide-nav">
                <div className="slide-dot-wrapper">
                    {slidePosition}
                </div>
            </div>
        </div>
    );
  }
}

export default Slideshow;