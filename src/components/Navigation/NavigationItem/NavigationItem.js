import React from 'react';

const navigationItem = (props) => {
    return (
        <li>
            <a href={props.path}>
                {props.name}
            </a>
        </li>
    )
}

export default navigationItem;