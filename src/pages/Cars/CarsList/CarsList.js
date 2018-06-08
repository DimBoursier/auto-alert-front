import React, { Component } from 'react';
import classes from './CarsList.css';

import Aux from '../../../components/hoc/Aux/Aux';
import axios from 'axios';

import CarsListItem from './CarsListItem/CarsListItem';
import CarDetail from './CarDetail/CarDetail';

class CarsList extends Component {
    state = {
        loadedCarId: null,
        cars: []
    }

    componentDidMount() {
        axios.get('/voitures')
            .then(res => {
                console.log(res);

                let jsonCars = res.data
                this.setState({ cars: jsonCars })

            }).catch(err => console.log(err));

    }

    loadCarDetailHandler = (id) => {
        this.setState({ loadedCarId: id });
    }

    render() {

        let data = <p>Something went wrong!!!!</p>

        data = this.state.cars.map(el => {
            return (
                <CarsListItem
                    key={el.id}
                    dataItem={el}
                    clicked={() => this.loadCarDetailHandler(el.id)} />
            )
        });

        return (
            <Aux>
                <section>
                    <div className={classes.CarsList}>
                        {data}
                    </div>
                </section>
                <section>
                    <CarDetail id={this.state.loadedCarId} />
                </section>

            </Aux>
        )
    }
}

export default CarsList;