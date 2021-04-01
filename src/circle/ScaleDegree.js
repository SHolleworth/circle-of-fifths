import React from 'react';
import './styles/scaleDegree.css';
import i from '../assets/SVG/i.svg'
import ii from '../assets/SVG/ii.svg'
import iii from '../assets/SVG/iii.svg'
import iv from '../assets/SVG/iv.svg'
import v from '../assets/SVG/v.svg'
import vi from '../assets/SVG/vi.svg'
import vii from '../assets/SVG/vii.svg'

const ScaleDegree = (props) => {
    const colors = {
        major: '#ea5e5e',
        minor: '#13707f',
        diminished: '#36b268'
    }

    const icons=[iv, i, v, ii, vi, iii, vii]

    let fillColor = ''

    if(props.index < 3) {
        fillColor = colors.major
    }
    if(props.index > 2 ) {
        fillColor = colors.minor
    }
    if(props.index > 5) {
        fillColor = colors.diminished
    } 

    return (
        <g  transform={`
            rotate(${180 + (props.index - 1) * +30} 100 60)
            translate(0 28)
            rotate(${(props.index - 1) * - 30} 100 60)
            `}
        >
            <circle
                className={'scaleDegreeCircle'}
                fill={fillColor}
            />
            <image href={icons[props.index]} className={'degreeIcon'} 
                x={97.5} y={57.5}
                height={5} width={5}
                transform={'rotate(180 100 60)'}
            />
        </g>
    );
};

export default ScaleDegree;