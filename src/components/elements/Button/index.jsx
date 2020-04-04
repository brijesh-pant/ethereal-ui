import React from 'react'
import PropTypes from 'prop-types'

import ThemedComponent from '../../../hoc/ThemedComponent';

import styles from '../../styles/button.css';

const Button = (props) => {
    return (
        <ThemedComponent as='button' styles={styles} {...props} />
    )
}

Button.defaultProps = {
    color: 'default',
    size: 'medium',
}

Button.propTypes = {
    color: PropTypes.oneOf([
        'default',
        'primary',
        'stroke',
        'success',
        'info',
        'warning',
        'danger',
    ]),
    size: PropTypes.oneOf([
        'small',
        'medium',
        'large',
    ]),
    disabled: PropTypes.bool,
}

export default Button
