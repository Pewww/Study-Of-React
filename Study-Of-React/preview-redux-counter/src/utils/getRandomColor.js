export default function () {
  const colorArr = [
    '#111111',
    '#F4586D',
    '#d45937',
    '#432222',
    '#292929',
    '#ad3f54'
  ];

  const randomIndex = Math.floor(Math.random() * colorArr.length);

  return colorArr[randomIndex];
}
