import React from 'react';
import Circle from './circle/Circle';
import './index.css'

const App = () => {
    return (
        <div className={'container'}>
            <article>
                <h1>Welcome to The Interactive Circle of Fifths</h1>
                <h2><span>Click</span> and <span>drag</span> the circle to move the notes around.</h2>
            </article>
            <Circle />
        </div>
    );
};

export default App;