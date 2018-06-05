import React from 'react';
import CarsList from './CarsList/CarsList';
import dataObject from '../../services/ListedCars/listedCars.json'

let data = dataObject;


const Cars = (props) => {

    return (
        <div>
            {data.map(el => {
                return (
                    <CarsList key={el.id} dataItem={el}/>
                )
            })}
        </div>
    )
}

export default Cars;