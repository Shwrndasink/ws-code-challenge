import React from 'react';
import App from './App';

import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });


describe('App renders without failure', () => {
  it('renders the <App />', () => {
    const app = enzyme.shallow(<App />);
    expect(app).toHaveLength(1);
  })
});
