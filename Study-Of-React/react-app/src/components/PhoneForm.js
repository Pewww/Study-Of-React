import React, { Component } from 'react';
import '../style/PhoneForm.css';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  }

  changeValue = ({ target }) => {
    this.setState({
      [ target.name ]: target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: ''
    })
  }


  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          type="text"
          name="name"
          placeholder="이름"
          value={ this.state.name }
          onChange={ this.changeValue }
        />
        <input 
          type="text"
          name="phone"
          placeholder="전화번호"
          value={ this.state.phone }
          onChange={ this.changeValue }
        />
        <button type="submit">등록</button>
        <div>
          값 체크: { this.state.name } - { this.state.phone }
        </div>
      </form>
    );
  }
}

export default PhoneForm;