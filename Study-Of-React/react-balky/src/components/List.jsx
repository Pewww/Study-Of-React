import React, { Component } from 'react';
import './List.css';

class List extends Component {
  listFunc = (list, input) => {
    // const pattern = new RegExp(`(${ input })`, 'gi');
    /* const filteredArray = list.map(list => (
      `<li key=${ list.id } class='lists'>
        ${ list.title.split(pattern,
          `<span class='highlight-text'>${ input }</span>`
        ) }
      </li>`
    )); */
    const filteredArray = list.map(list => {
      const pattern = new RegExp(`(${ input })`, 'gi');
      const parts = list.title.split(pattern);

      return (
        <li key={ list.id } className='lists'>
          { parts.map((part, index) => (
            <span key={ index } className={ part === input ? 'highlight-text' : '' }>
              { part }
            </span>
          )) }
        </li>
      );
    });

    return filteredArray;
  }

  render () {
    const { list, input } = this.props;

    return (
      <ul>
        { this.listFunc(list, input) }
      </ul>
    );
  }
}

export default List;