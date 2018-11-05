import React, { Component } from 'react';
import './App.css';
//impoerting person and using it as own tag!!
import Person from './Person/Person';

class App extends Component {
    //state - only possible if class extends Component
    state = {
        persons: [
            {name: 'dani', age: 99},
            {name: 'viktor', age: 101},
            {name: 'Mani', age: 66}
        ]
    }

    switchNameHandler = () =>{
        this.setState({
            persons: [
                {name: 'viktor', age: 12},
                {name: 'Mani', age: 66},
                {name: 'Dani', age: 111}
            ]
        });
    }

    render() {
        return (
            <div className = "App" >
                <h1 > Hi, I 'm a react app!</h1> 
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} ></Person>
                <Person name="Viktor" age="66">My Hobbies: Racing!</Person>
                <Person name="Mani" age="111"></Person>
            </div>
        );

        //behind the scene
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from behind the scene!'));
    }
}

export default App;