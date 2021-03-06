import React , { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

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
            showPersons: false,
            toggleClicked: 0,
            authentication : false
        };
    }

    componentWillMount(){
        console.log('[App.js] Inside compnentwillMount()');
    }

    componentDidMount(){
        console.log('[App.js] Inside componentDidMount()');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE App.js] Inside componentDidUpdate');
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
        this.setState((prevState, props) => {
          return{
              showPersons: !doesShow,
              toggleClicked: prevState.toggleClicked + 1
          }
        })};

    loginHandler = () => {
        this.setState({authentication: true});
    }

  render() {
      console.log('[App.js] Inside render()');
      let persons = null;

    if (this.state.showPersons){
        persons = <Persons
                    persons = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler}
        />
    }


    return (
        <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
              appTitle = {this.props.title}
              showPersons = {this.state.showPersons}
          persons = {this.state.persons}
              login = {this.loginHandler}
          clicked = {this.togglePersonsHandler}/>
            <AuthContext.Provider value={this.state.authentication}>
                {persons}
                </AuthContext.Provider>
        </Aux>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'));
  }
}

export default withClass(App, styles.App);
