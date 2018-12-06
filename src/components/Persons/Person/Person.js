import React, {Component} from 'react';
/**Type validation module prop types */
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';

class Person extends Component{

    constructor(props){
        //super(props) is necessary for the constructor to work
        super(props);
        console.log(`[Person.js] - Inside constructor()
         Props: `, props);
    }

    componentWillMount(){
        console.log(`[Person.js] - Inside componentWillMount()
        `);
    }

    componentDidMount(){
        console.log(`[Person.js] - Inside componentDidMount()`);
        if(this.inputElement.value === 'viktor'){
            this.inputElement.focus();
        }
    }

    render(){

        console.log(`[Person.js] - Inside render()`);

        return(
            <Aux>
                <p>Hey I'm {this.props.name},</p>
                <p>who's {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                {/** ref is only available in statefull components inputElements (contains input element) gets created in render*/}
                <input ref={(input) => {this.inputElement = input}} type="text" onChange={this.props.changed} value={this.props.name}/>
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