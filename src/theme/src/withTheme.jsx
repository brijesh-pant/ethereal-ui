import React from "react";
import defaultTheme from './defaultTheme'

const ThemeContext = React.createContext(defaultTheme);

const { Provider: ThemeProvider, Consumer: ThemeConsumer } = ThemeContext;

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withTheme(WrappedComponent) {
  class WithEtherealTheme extends React.Component {
    render() {
      return (
        <ThemeConsumer>
          {theme => <WrappedComponent theme={theme} {...this.props} />}
        </ThemeConsumer>
      );
    }
  }
  WithEtherealTheme.displayName = `WithEtherealTheme(${getDisplayName(
    WrappedComponent
  )})`;
  return WithEtherealTheme;
}

export { ThemeProvider, ThemeConsumer };
export default withTheme;
