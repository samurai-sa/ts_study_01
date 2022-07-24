// =============
// 02 : stating
// =============

// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("TypeScript はじめまして");
// world.sayHello(root);

// =============
// 03 : type
// =============

// import { primitiveSample } from "./basic";

// primitiveSample();

// =============
// 04 : function & parameters
// =============

// import { logMessage, logMessage2, logMessage3, logMessage4 } from './function/basic';
// import { isUserSignedIn, isUserSignedIn2, sum } from './function/parameters';

// logMessage('hello typescript');
// logMessage2('hello typescript');
// logMessage3('hello typescript');
// logMessage4('hello typescript');

// isUserSignedIn('abc', 'samurai-sa');
// isUserSignedIn('abcd');
// isUserSignedIn2('abc');

// const getSum = sum(100, 200, 300, 1);
// console.log('getSum', getSum);

// =============
// 05 : type
// =============

// import objectSample from './object/object';
// import typeAliasSample from './object/alias';

// objectSample();
// typeAliasSample();

// =============
// 06 : array
// =============
// import arraySample from './array/array';
// import tupleSample from './array/tuple';

// arraySample();
// tupleSample();

// =============
// 07 : ジェネリクス と ポリモーフィズム
// =============
// import genericsBasicSample from './generics/basic';
// import genericsAdvanceSample from './generics/advanced';

// genericsBasicSample();
// genericsAdvanceSample();

// =============
// 08 : async
// =============
import callbackSample from './async/callback';
import promiseSample from './async/promise';
import asyncSample from './async/async';

// callbackSample();
// promiseSample();
asyncSample();
