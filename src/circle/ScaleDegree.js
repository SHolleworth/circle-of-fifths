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

    const { cx, cy } = props.svgDimensions

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
            rotate(${180 + (props.index - 1) * +30} ${cx} ${cy})
            translate(0 22)
            rotate(${(props.index - 1) * - 30} ${cx} ${cy})
            `}
        >
            <circle
                cx={(cx)}
                cy={(cy)}
                className={'scaleDegreeCircle'}
                fill={fillColor}
            />
            <image href={icons[props.index]} className={'degreeIcon'} 
                x={(cx)-1.9} y={(cy)-1.9}
                height={4} width={4}
                transform={`rotate(180 ${cx} ${cy})`}
            />
        </g>
    );
};

export default ScaleDegree;