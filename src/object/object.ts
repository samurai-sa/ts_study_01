export default function objectSample() {
  const a: object = {
    name: 'hoge',
    age: 20,
  };

  // オブジェクトリレラル記法
  let country: {
    lang: string;
    name: string;
  } = {
    lang: 'Japanese',
    name: 'japan',
  };

  console.log('country1', country);
  // expected output => {lang: 'Japanese', name: 'japan'}

  country = {
    lang: 'English',
    name: 'USA',
  };

  console.log('country02', country);
  // expected output => {lang: 'English', name: 'USA'}

  // オプショナルと readonly
  const huga: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 20,
    lastName: 'Yamada',
    firstName: 'Taro',
  };

  huga.gender = 'male';
  huga.lastName = 'Kamado';

  console.log('huga01', huga);
  // expected output => {age: 20, lastName: 'Kamado', firstName: 'Taro', gender: 'male'}

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };

  capitals.China = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log('capitals01', capitals);
  // expected output=> {Japan: 'Tokyo', Korea: 'Seoul', China: 'Beijing', Canada: 'Ottawa'}
}
