import React from "react";
import { withTheme } from "../theme";

const Home = props => <h1>Hello, {props.theme.name}!</h1>;

export default withTheme(Home);
