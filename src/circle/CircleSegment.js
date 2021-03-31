import React from 'react';
import './styles/segment.css'

const CircleSegment = (props) => {
    return (
        <circle 
            id={props.note + 'Segment'}
            className={'segment'}
            strokeDasharray={props.strokeDasharray}
            transform={`rotate(${props.animatedRotation -105 + 30 * props.index}, 100, 60)`}
        />
    );
};

export default CircleSegment;