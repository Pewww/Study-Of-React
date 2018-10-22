import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  render () {
    const { list, input } = this.props;

    return (
      <ul>
        { list.map(item => (
          <Item
            key={ item.id }
            item={ item.title }
            input={ input }
          />
        )) }
      </ul>
    );
  }
}

export default List;