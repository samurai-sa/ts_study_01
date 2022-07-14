export default function tupleSample() {
  const response: [number, string] = [200, 'OK'];
  console.log('tupleSample01', response);

  // 可変長引数
  const girlfriends: [string, ...string[]] = ['kana', 'Miku', 'Keiko'];
  girlfriends.push('risa');
  console.log('tupleSample02', girlfriends);

  // ミュータブル（書き換え可能）
  // イミュータブル (書き換え不可能)
}
