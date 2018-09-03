import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render () {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(info => (
      <PhoneInfo
        onRemove={ onRemove }
        onUpdate={ onUpdate }
        info={ info }
        key={ info.id } // 렌더링을 위해 필요한 키 값 설정
      />
    ));

    return (
      <div>
        { list }
      </div>
    );
  }
}

export default PhoneInfoList;