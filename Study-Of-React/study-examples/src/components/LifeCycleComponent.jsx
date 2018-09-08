import React, { Component } from 'react';

class LifeCycleComponent extends Component {
  state = {
    num: 0,
    color: null
  }

  colorRef = null;

  constructor (props) {
    super(props);
    this.colorRef = React.createRef();
    console.log('constructor 단계');
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount () {
    console.log('첫 렌더링 이후의 componentDidMount');
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate 단계', nextProps, nextState);
    return nextState.num % 10 !== 4;
  }

  componentWillUnmount () {
    console.log('컴포넌트에서 DOM을 제거할 때의 componentWillUnmount');
  }

  increaseNumber = () => {
    // this.state.num += 1;
    // console.log(this.state.num);
    this.setState({
      num: this.state.num + 1
    });
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('DOM의 변화를 반영하기 바로 직전의 getSnapshotBeforeUpdate');
    if (prevProps.color !== prevState.color) {
      console.log('snapshot: ' + this.colorRef.current.style.color);
      return this.colorRef.current.style.color;
    }

    return null;
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('리렌더링 후에 실행되는 componentDidUpdate');
    if (snapshot) {
      console.log('업데이트 되기 직전의 색상: ' + snapshot);
    }
  }

  render () {
    console.log('render 단계');
    const { num, color } = this.state;
    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 ref={ this.colorRef } style={ style }>
          { num }
        </h1>
        <p>color: { color }</p>
        <button onClick={ this.increaseNumber }>Add</button>
      </div>
    );
  }
}

export default LifeCycleComponent;