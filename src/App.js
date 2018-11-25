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

    switchNameHandler = (newName) =>{
        this.setState({
            persons: [
                {name: newName, age: 99},
                {name: 'Mani', age: 101},
                {name: 'Dani', age: 66}
            ]
        });
    }

    nameChangedHandler = (event) =>{
        this.setState({
            persons: [
                {name: 'Dani', age: 12},
                {name: 'Viktor', age: 66},
                {name: event.target.value, age: 111}
            ]
        });
    }

    render() {
        return (
            <div className = "App" >
                <h1 > Hi, I 'm a react app!</h1> 
                <button onClick={this.switchNameHandler.bind(this, 'Viktor')}>Switch Name</button>
                <Person
                 name={this.state.persons[0].name} 
                 age={this.state.persons[0].age}></Person>
                <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={() => this.switchNameHandler('Somebody else')}>My Hobbies: Racing!</Person>
                <Person 
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
                changed={this.nameChangedHandler}></Person>
            </div>
        );

        //behind the scene
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from behind the scene!'));
    }
}

export default App;