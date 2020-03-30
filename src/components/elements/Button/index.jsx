import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/button.css';

function Button(props) {
    return (
        <button className={styles.title}>
            {props.children}
        </button>
    )
}

Button.propTypes = {

}

export default Button

