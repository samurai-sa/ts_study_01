export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string;
    lang: string;
    name: string;
  };

  const japan: Country = {
    capital: 'Tokyo',
    lang: 'Japanese',
    name: 'Japan',
  };

  console.log('CountryType01', japan);

  const america: Country = {
    capital: 'Washington, D.C.',
    lang: 'English',
    name: 'USA',
  };

  console.log('CountryType02', america);

  // 合併型 union と 交差型 intersection
  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  // 合併型 Knight or Wizard の型をもつ
  type Adventurer = Knight | Wizard;

  // 交差型 Knight and Wizard の型をもつ
  type Paladin = Knight & Wizard;

  // Knight 寄り
  const human1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り',
  };

  // Wizard 寄り
  const human2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
  };

  console.log('human1', human1);
  console.log('human1', human2);

  const human3: Paladin = {
    hp: 100,
    sp: 30,
    mp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り',
    magicSkill: 'ファイアボール',
  };

  console.log('human3', human3);
}
