import React, { Component } from 'react';

class IterationComponent extends Component {
  render () {
    const { yunjaes: lists } = this.props;
    const showLists = lists.map((list, index) => (
      <li key={ index }>{ list }</li>
    ));

    return (
      <ul>
        <h2>Simple Component Example</h2>
        { showLists }
      </ul>
    );
  }
}

export default IterationComponent;