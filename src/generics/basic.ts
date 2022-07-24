export default function genericsBasicSample() {
  // ジェリクス型を使わない
  const stingReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log('01', stingReduce(['a', 'i', 'u'], ''));

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log('02', numberReduce([1, 2, 3], 100));

  type genericReduce<T> = {
    (array: T[], initialValue: T): T;
  };

  const genericStringReduce: genericReduce<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log('03', genericStringReduce(['a', 'i', 'u'], ''));

  const generiNumberReduce: genericReduce<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log('04', generiNumberReduce([100, 200, 300], 1000));
}
