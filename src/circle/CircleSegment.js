import React from 'react';
import './styles/segment.css'

const CircleSegment = (props) => {
    const { cx, cy, r } = props.svgDimensions
    return (
        <circle 
            id={props.note + 'Segment'}
            cx={cx}
            cy={cy}
            r={r}
            className={'segment'}
            strokeDasharray={props.strokeDasharray}
            transform={`rotate(${props.animatedRotation -105 + 30 * props.index}, ${cx}, ${cy})`}
        />
    );
};

export default CircleSegment;