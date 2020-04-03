import React from 'react'
import PropTypes from 'prop-types'

import ThemedComponent from '../../../hoc/ThemedComponent';

import styles from '../../styles/button.css';

const Button = (props) => {
    return (
        <ThemedComponent as='button' styles={styles} {...props} />
    )
}

Button.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Button
