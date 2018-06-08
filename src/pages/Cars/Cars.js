import React, { Component } from 'react';
// import classes from './Cars.css';

import Aux from '../../components/hoc/Aux/Aux';
import { Route, Switch, Redirect } from 'react-router-dom';

import NewCar from './NewCars/NewCars';
import CarsList from './CarsList/CarsList';


class Cars extends Component {

    

    render() {
        
        return (
            <Aux>
                <Switch>
                    <Route path='/list' component={CarsList} />
                    <Route path='/new' component={NewCar} />
                    <Redirect from='/' to='/list' />
                </Switch>
            </Aux>
        )
    }
}

export default Cars;