import React from 'react'; 

import Light from '../Light';
import './simonlight.css'

const SimonLight = ({
    colors = ['red', 'yellow', 'green'],
    turnedOnLight = 'red',
    size = 'small',
}) => (
    <div className="lightContainer">
        <div className="simonLight">
        {
            colors.map(
                color => (
                    <Light
                    key={color}
                    color={color}
                    size={size}
                    isTurnedOn={color === turnedOnLight}
                    />
                )
            )
        }
        </div>
    </div>
);

export default SimonLight;