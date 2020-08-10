import React from "react";

import { Button, Input } from "../components/Home";

const Index = () => (
  <div>
    <Button>Default button</Button>
    <Button color="primary">Primary button</Button>
    <Button color="stroke">Stroke button</Button>
    <hr />
    <Button size="small">Small</Button>
    <Button size="large">Large</Button>
    <hr />
    <Button disabled color="primary">
      Disabled
    </Button>
    <Input />
  </div>
);

export default Index;
