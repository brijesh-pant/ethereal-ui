import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import ThemedComponent from '../../common/ThemedComponent';

import styles from '../../styles/button.css';

function Button(props) {
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
