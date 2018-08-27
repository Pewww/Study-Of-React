import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: '',
    age: 0
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;
    
    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        age: this.state.age
      })
    } else {
      this.setState({
        name: info.name,
        age: info.age
      });
    }

    this.setState({
      editing: !this.state.editing
    })
  }

  handleChange = ({ target }) => {
    this.setState({
      [ target.name ]: target.value
    })
  }

  render () {
    const { name, age, id } = this.props.info;
    const { editing } = this.state;
    const style = {
      border: '2px solid #202020',
      padding: '2rem',
      margin: '1rem'
    }

    return (
      <div style={ style }>
        {
          editing ? (
            <Fragment>
              <div>
                <input
                  onChange={ this.handleChange }
                  value={ this.state.name }
                  name="name"
                />
              </div>
              <div>
                <input
                  onChange={ this.handleChange }
                  value={ this.state.age }
                  name="age"
                />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div><b>{ name }</b></div>
              <div>{ age }</div>
            </Fragment>
          )
        }
        <button onClick={ this.handleRemove }>삭제</button>
        <button onClick={ this.handleToggleEdit }>
          { editing ? '적용' : '수정' }
        </button>
      </div>
    );
  }
}

export default PhoneInfo;