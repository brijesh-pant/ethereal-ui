import React from 'react'
import Box from 'ui-box'
import { withTheme } from '../../../theme'

class Heading extends React.Component {
    render() {
        const {theme, type, ...props} = this.props;
        return (
            <Box is="h1" {...theme.getHeadingStyles(type)} {...props} />
        )
    }
}

export default withTheme(Heading)