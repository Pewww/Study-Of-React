import React from 'react';

// 순수 함수나 화살표 함수 + 비구조화 할당을 이용하여 컴포넌트를 선언할 수 있다.
// 라이프사이클이나 API를 사용하지 않고, 오로지 props를 전달받아 뷰를 렌더링하는 역할만 할 때 쓰면 유용할 것 같다.

/* function FunctionalComponent (props) {
  return (
    <div>This is { props.name } component!</div>
  );
} */

const FunctionalComponent = ({ name }) => {
  return (
    <div>This is { name } component!</div>
  );
}

export default FunctionalComponent;