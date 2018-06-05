import React from 'react';

import './CarsList.css'

const CarsList = (props) => {
    console.log(props.dataItem);

    return (
        <div>
            {props.dataItem.marque}
        </div>
    );
}

export default CarsList;