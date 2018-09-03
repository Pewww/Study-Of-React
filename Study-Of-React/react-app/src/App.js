import React, { Component, Fragment } from 'react';
import PhoneForm from './components/Phone/PhoneForm'
import PhoneInfoList from './components/Phone/PhoneInfoList';
import Counter from './components/Phone/Counter';
import UserList from './components/Rendering/UserList';

class App extends Component {
  id= 0;
  key = 3;

  state = {
    information: [],
    input: '',
    users: [
      {
        key: 1,
        username: 'pewww'
      },
      {
        key: 2,
        username: 'caden'
      }
    ]
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
    });
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

  onChange = ({ target }) => {
    const { value } = target;
    this.setState({
      input: value
    });
  }

  onBtnClick = (e) => {
    this.setState(({ users, input }) => ({
      input: '',
      users: users.concat({
        key: this.key++,
        username: input
      })
    }))
  }

  render() {
    const { onChange, onBtnClick } = this;
    const { input, users } = this.state;

    return (
      <div>
        <Counter />
        <PhoneForm onCreate={ this.handleCreate } value="hello"/>
        <PhoneInfoList
          data={ this.state.information }
          onRemove={ this.handleRemove }
          onUpdate={ this.handleUpdate }
        />
        <div>
          <Fragment>
            <input onChange={ onChange } value={ input } />
            <button onClick={ onBtnClick }>추가</button> 
          </Fragment>
          <h2>사용자 목록</h2>
          <div>
            <UserList users={ users } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
