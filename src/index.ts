// 02 : stating
// import World from "./world";
// const root = document.getElementById("root");
// const world = new World("TypeScript はじめまして");
// world.sayHello(root);

// 03 : type
// import { primitiveSample } from "./basic";
// primitiveSample();

// 04 : function & parameters
import { logMessage, logMessage2, logMessage3, logMessage4 } from './function/basic';
import { isUserSigendIn, isUserSigendIn2, sum } from './function/parameters';

logMessage('hello typescript');
logMessage2('hello typescript');
logMessage3('hello typescript');
logMessage4('hello typescript');

isUserSigendIn('abc', 'samurai-sa');
isUserSigendIn('abcd');
isUserSigendIn2('abc');

const getSum = sum(100, 200, 300, 1);
console.log('getSum', getSum);
