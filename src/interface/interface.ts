interface Bread {
  calories: number;
}

interface Bread {
  type: string;
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
};

// 型エイリアス
type MadoDofu = {
  calories: number;
  level: number;
};

type Raice = {
  calories: number;
  gram: number;
};

type MaboDon = MadoDofu & Raice;

const maboDon: MaboDon = {
  calories: 300,
  level: 10,
  gram: 350,
};

// インターフェイスの継承
interface Book {
  page: number;
  title: string;
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekley';
}

const jump: Magazine = {
  page: 300,
  title: 'ジャンプ',
  cycle: 'daily',
};

type BookType = {
  page: number;
  title: string;
};

interface Handbook extends BookType {
  theme: string;
}

const cotrip: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
};

// interface を implements を使って class に型を定義する
class Comic implements Book {
  page: number;
  title: string;

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page;
    this.title = title;
  }

  getPublishYear() {
    return this.title + 'が発明されたのは' + this.publishYear + '年です';
  }
}

const hoge = new Comic(200, '鬼滅', '2015');
console.log(hoge.getPublishYear);
