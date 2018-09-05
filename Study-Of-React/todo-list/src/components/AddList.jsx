import React, { Component } from 'react';

class AddList extends Component {
  state = {
    lists: ['호랑이', '토끼', '곰', '펭귄'],
    animal: ''
  }

  setAnimalName = ({ target }) => {
    this.setState({
      [ target.name ]: target.value
    });
  }

  addAnimalList = () => {
    const { lists, animal } = this.state;
  
    this.setState({
      lists: lists.concat(animal),
      animal: ''
    });
  }

  render () {
    const { animal, lists } = this.state;
    const showLists = lists.map((list, index) => (
      <li key={ index }>{ list }</li>
    ));

    return (
      <div>
        <ul>
          { showLists }
        </ul>
        <input
          type="text"
          placeholder="동물 이름 입력"
          name="animal"
          value={ animal }
          onChange={ this.setAnimalName }
        />
        <button onClick={ this.addAnimalList }>추가</button>
      </div>
    );
  }
}

export default AddList;