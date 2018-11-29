import React from 'react';

const person = (props) => {

    return(
        <div className="Person">
            <p>Hey I'm {props.name},</p>
            <p>who's {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete</button>
        </div>
    );
}

export default person;