import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import MyTable from './MyTable.js';
import Form from './Form.js';
import './App.css';


class App extends Component {
    state = {
        characters: [],
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="App">
                <h1>React with React-Bootstrap Demo</h1>
                <br />
                <p>Add a character with a name and a job to the table.</p>
                <MyTable characterData={characters}
                    removeCharacter={this.removeCharacter} />
                <br />
                <h3>Add New Character</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App