import React from 'react'
import PropTypes from 'prop-types'

import ThemedComponent from '../../../hoc/ThemedComponent';

import styles from '../../styles/icon.css';

const Icon = (props) => {
    return (
        <ThemedComponent as='span' styles={styles} {...props} />
    )
}

Icon.defaultProps = {
    color: 'default',
    size: 'medium',
}

Icon.propTypes = {
    color: PropTypes.oneOf([
        'default',
        'primary',
    ]),
    size: PropTypes.oneOf([
        'small',
        'medium',
        'large',
    ]),
    disabled: PropTypes.bool,
}

export default Icon
