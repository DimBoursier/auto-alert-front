import React from 'react';

import classes from './CarsListItem.css';

const CarsListItem = (props) => {
        return (
            <div id={props.id} className={classes.CarsItem} onClick={props.clicked}>
                {props.dataItem.marque}
            </div>
        );
}

export default CarsListItem;