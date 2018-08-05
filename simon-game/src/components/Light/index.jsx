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
    size = 'small'
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
    /> 
);


export default Light; 