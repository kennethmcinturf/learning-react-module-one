import React , { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
                {id: 'asdfef',name: 'Max', age: 28},
                {id: 'gdgdgs',name: 'Manu', age: 29},
                {id: 'dgegwg',name: 'Stephanie', age: 26}
            ],
            showPersons: false
        };
    }

    componentWillMount(){
        console.log('[App.js] Inside compnentwillMount()');
    }

    componentDidMount(){
        console.log('[App.js] Inside componentDidMount()');
    }

    // state = {
    //     persons: [
    //         {id: 'asdfef',name: 'Max', age: 28},
    //         {id: 'gdgdgs',name: 'Manu', age: 29},
    //         {id: 'dgegwg',name: 'Stephanie', age: 26}
    //     ],
    //     showPersons: false
    // };

    switchNameHandler = (newName) =>{
        // console.log("wasclicked");
        // Dont do this this.state.persons[0].name = "maximillaian";
        this.setState({persons : [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
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
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = (prevState) => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow
        })
    };

  render() {
      console.log('[App.js] Inside render()');
      let persons = null;

    if (this.state.showPersons){
        persons = <Persons
                    persons = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler}/>
    }


    return (
      <div className={styles.App}>
          <Cockpit
              appTitle = {this.props.title}
              showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}/>
          {persons}
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'));
  }
}

export default App;