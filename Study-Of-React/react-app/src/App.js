import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id= 0;

  state = {
    information: [],
  }

  // 역시 마찬가지로 직접 값을 '변경'하는 것은 금지된다.
  // 따라서 push 대신 concat이나 slice 등을 이용한다.
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

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data
          };
        }

        return info;
      })
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={ this.handleCreate } value="hello"/>
        <PhoneInfoList
          data={ this.state.information }
          onRemove={ this.handleRemove }
          onUpdate={ this.handleUpdate }
        />
      </div>
    );
  }
}

export default App;
