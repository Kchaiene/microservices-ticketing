

const crypto = require("crypto");
const utils = require("util");

const scryptAsync = utils.promisify(crypto.scrypt);


class First extends Error {
  constructor(msg){
    super();
  }
}

class Second extends First {
    constructor (msg2) {
    super(msg2);
  }
}
class Third extends Second {
  constructor (msg3) {
    super(msg3);
  }
}
const e2 = new Second("2");
const e3 = new Third("3");

console.log("Test", e2 instanceof Error );
console.log("Test - 2", e2 instanceof First );

console.log("Test - 3 ", e3 instanceof Error );
console.log("Test - 4 ", e3 instanceof First );
console.log("Test - 5 ", e3 instanceof Second );
