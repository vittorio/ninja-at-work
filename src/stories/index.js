import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Job from '../components/Job/Job';

storiesOf('Job', module)
  .add('with default title', () => <Job/>)