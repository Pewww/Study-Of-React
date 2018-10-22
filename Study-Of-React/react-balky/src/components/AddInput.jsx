import React from 'react';
import './AddInput.css';

const AddInput = ({ input, inputChange, addList }) => {
  return (
    <input
      type="text"
      className="add-input"
      value={ input }
      onChange={ inputChange }
      placeholder="추가할 텍스트를 입력해주세요."
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          addList();
        }
      }}
    />
  );
}

export default AddInput;