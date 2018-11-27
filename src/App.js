import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
//impoerting person and using it as own tag!!
import Person from './Person/Person';

class App extends Component {
    //state - only possible if class extends Component
    state = {
        persons: [
            {name: 'dani', age: 99},
            {name: 'viktor', age: 101},
            {name: 'Mani', age: 66}
        ],
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event) =>{
        this.setState({
            persons: [
                {name: 'Dani', age: 12},
                {name: 'Viktor', age: 66},
                {name: event.target.value, age: 111}
            ]
        });
    };

    togglePersonHandler = () => {
        //const doesShow = this.state.showPersons; /*set doesShow to shoePerson (true or false)*/
        this.setState({showPersons: !this.state.showPersons}); /*set shoePerson to opposite of doesShow (revert true and false)*/
    };

    //everytime react updates dom -> the whole render()- Method gets triggered
    //we take advantage here by definin Persons and in the if set the person
    //to a value we want to have depending on the state
    render() {

        //inline styling (scoped to the component but some restriction)
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        //if state.showPersons = false -> render null (nothing)
        let persons = null;

        //if state.showPersons = true -> render persons
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) =>{
                        return <Person
                            click={() => {this.deletePersonHandler(index)}}
                            name={person.name}
                            age={person.age}></Person>
                    })}
                </div>
            );
        }

        return (
            <div className = "App" >
                <h1 > Hi, I 'm a react app!</h1> 
                {/* Inline styling on Button */}
                <button style={style}
                 onClick={this.togglePersonHandler}>Switch Visibility</button>

                {/* statement ? true : false - as if! because normal if block is not possible*/}
                {persons}
            </div>
        );

        //behind the scene
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from behind the scene!'));
    }
}

export default App;