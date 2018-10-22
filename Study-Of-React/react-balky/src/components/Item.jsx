import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render () {
    const { item, input } = this.props;
    const pattern = new RegExp(`(${ input })`, 'gi');
    const splitParts = item.split(pattern);

    return (
      <li className='items'>
        { splitParts.map((part, index) => (
          <span
            key={ index }
            className={ (part === input && input !== '') ? 'highlight-text' : '' }
          >
            { part }
          </span>
        )) }
      </li>
    );
  }
}

export default Item;
