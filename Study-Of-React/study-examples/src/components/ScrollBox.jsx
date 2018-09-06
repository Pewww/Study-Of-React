import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { box } = this;
    const { scrollHeight, clientHeight } = box;
    const duration = 10;

    const animate = setInterval(() => {
      box.scrollTop = box.scrollTop += duration;
      if (box.scrollTop === scrollHeight - clientHeight) {
        clearInterval(animate);
      }
    }, duration);
  }

  render () {
    const myRef = React.createRef();

    const style = {
      border: '1px solid #202020',
      width: '300px',
      height: '300px',
      overflow: 'auto',
      position: 'relative',
      marginTop: '1rem'
    };

    const innerStyle = {
      width: '100%',
      height: '900px',
      background: 'linear-gradient(white, black)'
    };

    return (
      <div
        style={ style }
        ref={ ref => this.box = ref }
      >
        <div style={ innerStyle } ref={ myRef }></div>
      </div>
    );
  }
}

export default ScrollBox;