import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ],
        showPersons: true
    };

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

    nameChangedHandler = (event) => {
        this.setState({persons : [
                {name: "Max", age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    };

    togglePersonsHandler = (prevState) => {
        const doesShow = this.state.showPersons;
        this.setState({persons : [
            {name: "Max", age: 28},
            {name: "Manu", age: 29},
            {name: 'Stephanie', age: 27}
        ], showPersons: !doesShow
        })
    };

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

    let persons = null;

    if (this.state.showPersons){
        persons = (
            <div>
                {this.state.persons.map(person => {
                    return <Person
                        name={person.name}
                        age={person.age}/>
                })}
            </div>
        );
    }
    return (
      <div className="App">
        <h1>Hi, Im a react app</h1>
          <p>This is really working</p>
          <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'));
  }
}

export default App;
