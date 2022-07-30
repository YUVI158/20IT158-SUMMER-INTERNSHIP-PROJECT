
import React from 'react';
import './Card2.css';

const  Card2=( props )=> {
    return (
        <>
            <div className='sect'>
            <div className="card2">
                <img src={process.env.PUBLIC_URL + `${props.source}`} className="wtm mx-auto r-test1" />
                <h3 className='fts2 fw2 fs5 wtm  mx-auto'>{props.name}</h3>
            </div>
            </div>
        </>
    );
}

export default Card2;
