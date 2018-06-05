import React from 'react';

import classes from './CarsList.css';

const CarsList = (props) => {
    console.log(props.dataItem);

    return (
        <div className={classes.CarsItem}>
            {props.dataItem.marque}
        </div>
    );
}

export default CarsList;