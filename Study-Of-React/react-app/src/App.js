import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm'

class App extends Component {
  id= 0;

  state = {
    information: [],
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      /*
      1번 방법
      information: information.concat({
        ...data,
        id: this.id++
      })
      */
      // 2번 방법
      information: information.concat(Object.assign(
        {},
        data,
        { id: this.id++ }
      ))
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={ this.handleCreate }/>
        PROP: { JSON.stringify(this.state.information) }
      </div>
    );
  }
}

export default App;
