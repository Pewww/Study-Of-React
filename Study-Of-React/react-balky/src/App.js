import React, { Component } from 'react';
import TextInput from './components/TextInput';
import List from './components/List';
import contact from './api/contact';
import './App.css';

class App extends Component {
  state = {
    input: '',
    listData: [],
    duplicatedData: []
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
      console.log(err);
    });
  }

  render() {
    const { input, duplicatedData } = this.state;
    const { handleChange } = this;

    return (
      <div className="app">
        <TextInput input={ input } inputChange={ handleChange }/>
        <List input={ input } list={ duplicatedData } />
      </div>
    );
  }
}

export default App;
