import React from 'react'
import { shallow } from 'enzyme';

import Job from './Job';

describe('Job component', () => {
  it('should be rendered as div element', () => {
    const wrapper = shallow(<Job/>);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.is('div')).toBeTruthy();
  });

  it('should contains not empty title', () => {
    const wrapper = shallow(<Job/>);

    expect(wrapper.find('.title').length).toEqual(1);
    expect(wrapper.find('.title').text().length).toBeGreaterThan(0);
  });
});