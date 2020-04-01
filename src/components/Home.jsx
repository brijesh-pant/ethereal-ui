import React from 'react';

import '!style-loader!css-loader!./styles/theme.css'

import Button from './elements/Button';

const Home = () => (
  <div>
    <Button>Default button</Button>
    <Button color='primary'>Primary button</Button>
    <Button color='stroke'>Stroke button</Button>
    <hr/>
    <Button size='small'>Small</Button>
    <Button size='large'>Large</Button>
    <hr/>
    <Button disabled color='primary'>Disabled</Button>
  </div>
)

export default Home;