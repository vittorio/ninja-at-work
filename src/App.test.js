import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App component', () => {
  it('renders as a div tag', () => {
    const appEl = shallow(<App/>);

    expect(appEl.is('div')).toEqual(true);
  });
});
