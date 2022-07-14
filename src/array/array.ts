export default function arraySample() {
  // シンプルな配列
  const colors: string[] = ['red', 'blue'];
  colors.push('yellow');

  console.log('array01', colors);

  // Array<T>
  const even: Array<number> = [2, 4, 6];
  even.push(8);

  console.log('array02', even);
}
