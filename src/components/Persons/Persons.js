import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component{
    constructor(props){
        //super(props) is necessary for the constructor to work
        super(props);
        console.log(`[Persons.js] - Inside constructor()
         Props: `, props);
    }

    componentWillMount(){
        console.log(`[Persons.js] - Inside componentWillMount()
        `);
    }

    componentDidMount(){
        console.log(`[Persons.js] - Inside componentDidMount()`);
    }

    render(){

        console.log(`[Persons.js] - Inside render()`);

        return (
            <div>
                {this.props.persons.map((person, index) =>{
                    return <Person
                        click={() => {this.props.clicked(index)}}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => {this.props.changed(event, person.id)}} />
                })}
            </div>
        );
    }
} 

export default Persons;