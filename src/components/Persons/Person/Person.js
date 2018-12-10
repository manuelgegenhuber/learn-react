import React, {Component} from 'react';
/**Type validation module prop types */
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';

import {AuthContext} from '../../../containers/App';

class Person extends Component{

    constructor(props){
        //super(props) is necessary for the constructor to work
        super(props);
        console.log(`[Person.js] - Inside constructor()
         Props: `, props);
         this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log(`[Person.js] - Inside componentWillMount()
        `);
    }

    componentDidMount(){
        console.log(`[Person.js] - Inside componentDidMount()`);
        if(this.inputElement.current.value === 'viktor'){
            this.focus();
        }
    }

    focus(){
        this.inputElement.current.focus();
    }

    render(){

        console.log(`[Person.js] - Inside render()`);

        return(
            <Aux>
                <AuthContext.Consumer>
                    {(auth) => {return auth ? <p>I'm Authenticated</p> : null}}
                </AuthContext.Consumer>
                <p>Hey I'm {this.props.name},</p>
                <p>who's {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                {/** ref is only available in statefull components inputElements (contains input element) gets created in render*/}
                <input ref={this.inputElement} type="text" onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.click}>Delete</button>
            </Aux>
        );
    }
}
//here propTypes small!! -> func
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);