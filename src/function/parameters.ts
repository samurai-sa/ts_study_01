// オプションパラメータを使う関数
export const isUserSigendIn = (userId: string, username?: string): boolean => {
  if (userId === 'abc') {
    console.log('User is sigend in!!', username);
    return true;
  } else {
    console.log('User is not sigend in');
    return false;
  }
};

// デフォルトパラメーターを使う関数
export const isUserSigendIn2 = (userId: string, username = 'no name'): boolean => {
  if (userId === 'abc') {
    console.log('User is sigend in!! 3', username);
    return true;
  } else {
    console.log('User is not sigend in 4');
    return false;
  }
};

// レストパラメーターを使う関数
export const sum = (...itemsPrice: number[]): number => {
  return itemsPrice.reduce((total: number, itemPrice: number) => {
    return total + itemPrice;
  }, 0);
};
