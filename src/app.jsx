import "./scss/style.scss";
import React from "react";
import ReactDOM from "react-dom";

import Example from "./example";

const renderApplication = () => {
  ReactDOM.render(<Example />, document.querySelector("#root"));
};

renderApplication(Example);

if (module.hot) {
  module.hot.accept("./example", () => {
    renderApplication();
  });
}
