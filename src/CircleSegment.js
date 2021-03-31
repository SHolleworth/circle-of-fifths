import React from 'react';
import './index.css'

const CircleSegment = (props) => {
    return (
        <circle 
            id={props.note + 'Segment'}
            className={'segment'}
            strokeDasharray={props.strokeDasharray}
            transform={`rotate(${props.animatedRotation -105 + 30 * props.index}, 50, 50)`}
        />
    );
};

export default CircleSegment;