//import { apiKey as token, secondUrl as url } from "./util.js";
import * as utils from "./util.js";
console.log(utils);

export default function combine(a, b, c) {
  return (a * b) / c;
}

const sum = (a, b) => {
  return a * b;
};

console.log(sum(4, 6));
