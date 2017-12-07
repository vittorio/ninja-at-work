import React from 'react'
import { shallow } from 'enzyme';

import Job from './Job';

describe('Job component', () => {
  it('should be rendered as div element', () => {
    const wrapper = shallow(<Job/>);

    expect(wrapper.is('div')).toEqual(true);
  });
});