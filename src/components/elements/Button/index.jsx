import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import ThemedComponent from '../../../hoc/ThemedComponent';

import styles from '../../styles/button.css';

const Button = (props) => {
    const {
        leftIcon,
        rightIcon,
        icon,
        children,
    } = props;

    const renderLeftIcon = () => {
        const {
            children: iconChildren
        } = leftIcon.props;
        return React.cloneElement(leftIcon, {
            className: cs(styles.icon, styles.leftIcon)
        }, iconChildren)
    }

    const renderRightIcon = () => {
        const {
            children: iconChildren
        } = rightIcon.props;
        return React.cloneElement(rightIcon, {
            className: cs(styles.icon, styles.rightIcon)
        }, iconChildren)
    }

    return (
        <ThemedComponent
            as='button'
            className={cs({[styles.iconAndLabelButton]: leftIcon || rightIcon})}
            styles={styles}
            {...props}
        >
            {leftIcon && renderLeftIcon()}
            {children}
            {rightIcon && renderRightIcon()}
        </ThemedComponent>
    )
}

Button.defaultProps = {
    color: 'default',
    size: 'medium',
    leftIcon: null,
    rightIcon: null,
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
    isFullWidth: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
}

export default Button
