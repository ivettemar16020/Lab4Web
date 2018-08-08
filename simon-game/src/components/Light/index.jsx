import React from 'react';

import './light.css';

const POSSIBLE_SIZES = [
    'small', 
    'medium',
    'large',
];

const Light = ({
    isTurnedOn = false, 
    color = 'red', 
    size = 'small',
    clicked = (colInfo='')=>{console.log(colInfo)} //Print the color picked by the player
}) => (
    <div className={
        `
          light
          ${POSSIBLE_SIZES.includes(size) ? size: ''}
          ${isTurnedOn ? 'on' : ''}
        `
    }
    style={
        {
            background: color,
        }
    }
    onClick={
        () => clicked(color)
    }
    /> 
);


export default Light; 