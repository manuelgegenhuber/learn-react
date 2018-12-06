import React from 'react';

import Aux from '../../hoc/Auxillary';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

        if(props.personCount <= 2){
            assignedClasses.push(classes.red);
        }
        if(props.personCount <= 1){
            assignedClasses.push(classes.bold);
        }
        if(props.showPersons){
            btnClass = classes.Red;
        }

    return (
        <>
            <div className={classes.Cockpit}>
                <h1 > Hi, I 'm a react app!</h1> 
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                {/* This is a comment in jsx */}
                <button className={btnClass}
                 onClick={props.click}>Switch Visibility</button>
            </div>
        </>
    );
}

export default cockpit;