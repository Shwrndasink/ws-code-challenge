import React from 'react';
import Slideshow from './Slideshow';

import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const testImages = [
    {
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201810/0031/metallic-square-lanterns-1-m.jpg",
    },
    {
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201811/0001/metallic-square-lanterns-m.jpg",
    },
    {
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201808/0047/gold-glass-candleholders-m.jpg",
    }
];


describe('Slideshow renders without failure', () => {
  it('renders the <Slideshow />', () => {
    const component = enzyme.shallow(<Slideshow images={testImages} />);
    expect(component).toHaveLength(1);
  })
});

describe('Displays the next image', () => {
    const component = enzyme.mount(<Slideshow images={testImages} />);
    const moveRight = component.find('.slide-arrow.right');
    // Click the button twice to move two images right
    moveRight.simulate('click');
    moveRight.simulate('click');
    expect(component.state().activeSlide).toEqual(2);
});

describe('Displays the previous image', () => {
    const component = enzyme.mount(<Slideshow images={testImages} />);
    const moveRight = component.find('.slide-arrow.left');
    moveRight.simulate('click');
    // Since we start at index 0, should be 2 the last index in the image array
    expect(component.state().activeSlide).toEqual(2);
});