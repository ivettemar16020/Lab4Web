import React from 'react'; 

import Light from '../Light';
import './simonlight.css'

const SimonLight = ({
    colors = ['red', 'yellow', 'green', 'blue'],
    turnedOnLight = 'red',
    size = 'small',
    clicked = (colInfo='')=>{console.log('clicked')},
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
                    clicked={clicked}
                    />
                )
            )
        }
        </div>
    </div>
);

export default SimonLight;