import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    let scrollVal = 10;
    const { box } = this;

    const animate = setInterval(() => {
      box.scrollTop = box.scrollTop += 10;
      if (box.scrollTop === scrollHeight - clientHeight) {
        clearInterval(animate);
      }
    }, 10);
  }

  render () {
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
        <div style={ innerStyle }></div>
      </div>
    );
  }
}

export default ScrollBox;