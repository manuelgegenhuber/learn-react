import React from 'react';
import classes from './Person.css'

const person = (props) => {

    const rnd = Math.random();

    if(rnd > 0.7){
        throw new Error('Something went wrong');
    }

    return(
        <div className={classes.Person}>
            <p>Hey I'm {props.name},</p>
            <p>who's {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete</button>
        </div>
    );
}

export default person;