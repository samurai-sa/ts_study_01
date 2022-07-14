// アロー関数
export const logMessage = (message: string): void => {
  console.log('メッセージ1', message);
};

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('メッセージ2', message);
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log('メッセージ3', message);
};

// アロー関数の省略
export const logMessage4 = (message: string): void => console.log('メッセージ4', message);
