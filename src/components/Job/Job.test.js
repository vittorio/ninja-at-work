import React from 'react'
import ReactDOM from 'react-dom';

import Job from './Job';

describe('Job component', () => {
  it('should be rendered without erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Job />, div);
  });
});