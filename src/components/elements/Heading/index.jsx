import React from 'react'
import PropTypes from 'prop-types'

import ThemedComponent from '../../../hoc/ThemedComponent';

import styles from '../../styles/heading.css';

const Heading = (props) => {
    return (
        <ThemedComponent as={props.is} styles={styles} {...props} />
    )
}

Heading.defaultProps = {
    is: 'h1',
}

Heading.propTypes = {
    is: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

export default Heading
