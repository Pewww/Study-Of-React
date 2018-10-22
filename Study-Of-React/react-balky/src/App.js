import React, { Component } from 'react';
import AddInput from './components/AddInput';
import TextInput from './components/TextInput';
import List from './components/List';
import contact from './api/contact';
import './App.css';

class App extends Component {
  id = 10;

  getId = () => {
    return ++this.id;
  }

  state = {
    input: '',
    addInput: '',
    listData: [],
    duplicatedData: []
  }

  addChange = ({ target }) => {
    this.setState({
      addInput: target.value
    });
  }

  addList = () => {
    console.log('pressed');
    const { addInput, listData, duplicatedData } = this.state;
    const filteredInput = {
      title: addInput,
      id: this.getId()
    }

    console.log(filteredInput);

    if (addInput !== '') {
      this.setState({
        listData: [
          ...listData,
          filteredInput
        ],
        duplicatedData: [
          ...duplicatedData,
          filteredInput
        ],
        addInput: ''
      });
    }
  }

  handleChange = ({ target }) => {
    const { listData } = this.state;
    const { value: inputVal } = target;

    this.setState({
      input: inputVal,
      duplicatedData: listData.filter(list => list.title.includes(inputVal))
    });
  }

  componentDidMount () {
    contact.getServerData()
    .then(response => {
      const { data } = response;
      this.setState({
        listData: data,
        duplicatedData: data
      });
    })
    .catch(err => {
      throw new Error(err);
    });
  }

  render() {
    const { input, duplicatedData, addInput } = this.state;
    const { addChange, handleChange, addList } = this;

    return (
      <div className="app">
        <AddInput input={ addInput } inputChange={ addChange } addList={ addList } />
        <TextInput input={ input } inputChange={ handleChange }/>
        <List input={ input } list={ duplicatedData } />
      </div>
    );
  }
}

export default App;
