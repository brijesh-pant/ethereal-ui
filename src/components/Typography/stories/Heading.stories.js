import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../ui/Heading';

storiesOf('Heading', module)
  .add('with type h1', () => <Heading type="h1">Hello Heading H1</Heading>);