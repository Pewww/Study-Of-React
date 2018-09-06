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
    
    if (animal !== '') {
      this.setState({
        lists: lists.concat(animal),
        animal: ''
      });
    }
  }

  removeAnimal = (index) => {
    const { lists } = this.state;
    
    // 전개 연산자를 이용하여 클릭한 index를 제외한 값들을 배열에 넣어주기
    // splice로 배열을 직접 변경하는 것이 아닌, slice를 이용하여 새로운 배열을 만들어 내는 것

    this.setState({
      lists: [
        ...lists.slice(0, index),
        ...lists.slice(index + 1, lists.length)
      ]
    });
  }

  render () {
    const { animal, lists } = this.state;
    const showLists = lists.map((list, index) => (
      <li
        key={ index }
        onClick={ () => this.removeAnimal(index) }
      >
        { list }
      </li>
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
          onKeyUp={ (e) => { e.key === 'Enter' ? this.addAnimalList() : '' } }
        />
        <button onClick={ this.addAnimalList }>추가</button>
      </div>
    );
  }
}

export default AddList;