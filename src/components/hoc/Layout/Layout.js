import React, { Component } from 'react';
import Navigation from '../../Navigation/Navigation';
import Aux from '../Aux/Aux'

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Navigation />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}

export default Layout;