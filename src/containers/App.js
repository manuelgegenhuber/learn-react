import React, { PureComponent } from 'react';
import classes from './App.css';
import '../components/Persons/Person/Person.css';
//impoerting person and using it as own tag!!
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends PureComponent {


    constructor(props){
        //super(props) is necessary for the constructor to work
        super(props);
        console.log(`[App.js] - Inside constructor()
         Props: `, props);
    }

    componentWillMount(){
        console.log(`[App.js] - Inside componentWillMount()
        `);
    }

    componentDidMount(){
        console.log(`[App.js] - Inside componentDidMount()`);
    }

    /**
     * shouldComponentUpdate(nextProps, nextState){
        console.log(`[App.js] - Inside shouldComponentUpdate()`);
        return nextState.person !== this.state.persons ||
        nextState.showPersons !== this.state.showPersons;
    }
     */

    //state - only possible if class extends Component
    state = {
        persons: [
            {id: 'ergerg1',name: 'dani', age: 99},
            {id: 'ergg5',name: 'viktor', age: 101},
            {id: 'ergeg17b',name: 'Mani', age: 66}
        ],
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice(); //slice to copy the array -> otherwise bad practice because array = copy by reference
        //alternative (new Approach)
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };


    nameChangedHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });
    
        const person = {
          ...this.state.persons[personIndex]
        };
    
        // const person = Object.assign({}, this.state.persons[personIndex]);
    
        person.name = event.target.value;
    
        const persons = [...this.state.persons];
        persons[personIndex] = person;
    
        this.setState( {persons: persons} );
      }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons; /*set doesShow to shoePerson (true or false)*/
        this.setState({showPersons: !doesShow}); /*set shoePerson to opposite of doesShow (revert true and false)*/
    };

    //everytime react updates dom -> the whole render()- Method gets triggered
    //we take advantage here by definin Persons and in the if set the person
    //to a value we want to have depending on the state
    render() {

         console.log(`[App.js] - Inside render()`);
        
        //if state.showPersons = false -> render null (nothing)
        let persons = null;

        //if state.showPersons = true -> render persons
        if(this.state.showPersons){

            //map to convert normal array to jsx array
            persons = <Persons persons = {this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />
        }

        return (
                <div className = {classes.App} >
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit
                    personCount={this.state.persons.length}
                    click={this.togglePersonHandler}
                    showPersons={this.state.showPersons}
                />
                {/* statement ? true : false - as if! because normal if block is not possible*/}
                {persons}
            </div>
        );

        //behind the scene
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from behind the scene!'));
    }
}

export default App;