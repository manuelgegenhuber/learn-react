import React, {PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent{

    /*
        Call super(props)
        DO:     Set up State
        DON'T:  Cause Side-Effects (i.e. reach out for the web)
    */

    constructor(props){
        //super(props) is necessary for the constructor to work
        super(props);
        console.log(`[Persons.js] - Inside constructor()
         Props: `, props);
    }


    /*
        DO:     Update State, last minute Optimization
        DON'T:  Cause Side-Effects (i.e. reach out for the web)
    */

    componentWillMount(){
        console.log(`[Persons.js] - Inside componentWillMount()
        `);
    }

    /**
     * DO:      Sync State to props
     * DON'T    Cause Side Effects 
     */

    componentWillReceiveProps(nextProps){
        console.log('[Update Person.js] Inside componentWillReceiveProps');
    }

    /**
     * DO:      Decide whether to Continue or Not
     * DON'T    Cause Side Effects 
     * return false to not update and true to update
     */

    /**
     * 
     *shouldComponentUpdate(nextProps, nextState){
        console.log('[Update Person.js] Inside shouldComponentUpdate');
        console.dir(nextProps);
        console.dir(nextState);
        return nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked;
    }
     */

    /**
     * DO:      Sync State to Props
     * DON'T    Cause Side Effects 
     */

    componentWillUpdate(nextProps, nextState){
        console.log('[Update Person.js] Inside componentWillUpdate');
        console.dir(nextProps);
        console.dir(nextState);
    }

    /**
     * DO:      Cause Side Effects
     * DON'T    Sync State to Props (triggers re-render) 
     */

    componentDidUpdate(){
        console.log('[Update Person.js] Inside componentDidUpdate');
    }

    /*
        Prepare & Structure your JSX Code
    */
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


    /*
        DO:     Cause Side effects
        DON'T:  Update State (or it triggers a re-render -> perfomance)
    */

    componentDidMount(){
        console.log(`[Persons.js] - Inside componentDidMount()`);
    }
} 

export default Persons;