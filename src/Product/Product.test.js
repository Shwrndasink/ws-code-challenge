import React from 'react';
import Product from './Product';

import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const testItemImg = {
        "name": "Metallic Square Lanterns",
        "priceRange": {
            "selling": {
                "high": 111,
                "low": 18
            },
        },
        "hero": {
            "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201810/0031/metallic-square-lanterns-m.jpg",
        },
        "images": [
            {
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201810/0031/metallic-square-lanterns-1-m.jpg",
            }
        ]};
const testItemNoImg = {
    "name": "Metallic Square Lanterns",
    "priceRange": {
        "selling": {
            "high": 111,
            "low": 18
        },
    },
    "hero": {
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201810/0031/metallic-square-lanterns-m.jpg",
        },
        "images": []
    };


describe('Product renders without failure', () => {
  it('renders the <Product />', () => {
    const component = enzyme.shallow(<Product item={testItemNoImg} key="test" />);
    expect(component).toHaveLength(1);
  })
});

describe('Product renders item prop correctly', () => {
    const component = enzyme.shallow(<Product item={testItemNoImg} key="test" />);
    expect(component.instance().props.item).toEqual(testItemNoImg);
});

describe('Click on product opens slideshow if product has other images', () => {
    const component = enzyme.mount(<Product item={testItemImg} key="test" />);
    const li = component.find('li');
    li.simulate('click');
    expect(component.state().displaySlides).toEqual(true);
});

describe('Click on product does not open slideshow if product has no images', () => {
    const component = enzyme.mount(<Product item={testItemNoImg} key="test" />);
    const li = component.find('li');
    li.simulate('click');
    expect(component.state().displaySlides).toEqual(false);
});