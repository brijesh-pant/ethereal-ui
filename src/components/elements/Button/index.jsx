import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/button.css';

function Button(props) {
    return (
        <button className={styles.button}>
            {props.children}
        </button>
    )
}

Button.propTypes = {

}

export default Button

