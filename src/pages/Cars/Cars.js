import React from 'react';
import CarsList from './CarsList/CarsList';
import classes from './Cars.css'
import dataObject from '../../services/ListedCars/listedCars.json'

let data = dataObject;


const Cars = (props) => {

    return (
        <div className={classes.Cars}>
            {data.map(el => {
                return (
                    <CarsList key={el.id} dataItem={el}/>
                )
            })}
        </div>
    )
}

export default Cars;