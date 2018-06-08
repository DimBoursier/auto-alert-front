import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'

const navigation = (props) => {
    return (
        <nav>
            <ul>
                <NavigationItem name='Cars List' path='/list' />
                <NavigationItem name='NewCar' path='/new' />
            </ul>
        </nav>
    )
}

export default navigation;