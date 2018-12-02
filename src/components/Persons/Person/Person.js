import React, {Component} from 'react';
import classes from './Person.css'

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
    }

    render(){

        console.log(`[Person.js] - Inside render()`);

        return(
            <div className={classes.Person}>
                <p>Hey I'm {this.props.name},</p>
                <p>who's {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.click}>Delete</button>
            </div>
        );
    }
}

export default Person;