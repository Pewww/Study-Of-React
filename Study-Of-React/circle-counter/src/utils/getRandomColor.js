export default function () {
  const randomColors = [
    '#111111',
    '#222222',
    '#333333',
    '#444444',
    '#555555',
    '#666666',
    '#777777',
    '#888888',
    '#999999',
    '#aaaddd',
    '#bbbccc'
  ];

  const randomNumber = Math.floor(Math.random() * randomColors.length);
  // 테스트용
  // console.log(randomNumber);
  // console.log(randomColors[randomNumber]);

  return randomColors[randomNumber];
}