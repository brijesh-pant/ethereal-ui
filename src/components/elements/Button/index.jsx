import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import styles from '../../styles/button.css';

function Button(props) {
    const {
        color,
        children,
        size,
        disabled,
    } = props;

    const classes = cs(styles.button, {
        [styles.primary]: color === 'primary',
        [styles.stroke]: color === 'stroke',
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
        [styles.disabled]: disabled,
    })

    return (
        <button
            disabled={disabled}
            className={classes}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Button
