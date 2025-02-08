import React from 'react';
import {Container as SemanticContainer} from 'semantic-ui-react'

const Container = ({ children, style }) => {

    const containerStyle  = {

        maxWidth: 'auto',
        margin: '55px 30px 40px',
        marginTop: '100px',
        marginLeft:'30px',
        marginRight:'30px',

        ...style
    }
    return <SemanticContainer style={containerStyle}>
        {children}
    </SemanticContainer>;
};
export default Container;