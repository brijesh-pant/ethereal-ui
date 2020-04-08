import React from 'react'
import cs from 'classnames'

/* 
Use .{prop}-{value} convention for style props. E.g. .color-primary
Use .{prop} convention if the prop value is boolean
*/
const mapPropsToStyles = (props = {}, styles = {}) => {
    const mappedClassNames = Object.entries(props).reduce((mappedStyles, [prop, value]) => {
        let className = '';
        switch(typeof value) {
          case 'boolean':
            className = prop;
            break;
          case 'string':
            className = `${prop}-${value}`;
            break;
        }
        if (className === '' || typeof styles[className] === 'undefined') return mappedStyles;
        return { ...mappedStyles, [styles[className]]: true };
      }, {});
      
      return cs(styles.root, mappedClassNames);
}

export default function ThemedComponent({ as = 'div', className, styles = {}, children, ...props }) {
  const classes = mapPropsToStyles(props, styles);
  return React.createElement(as, {
    className: cs(classes, className)
  }, children);
}
