import mongoose from "mongoose";

// class First extends Error {
//   constructor(msg: string){
//     super();
//   }
// }
// class Second extends First {
//   constructor (msg2: string) {
//     super(msg2);
//   }
// }
// class Third extends Second {
//   constructor (msg3: string) {
//     super(msg3);
//   }
// }
// const e2 = new Second("2");
// const e3 = new Third("3");
//
// console.log("Test", e2 instanceof Error );
// console.log("Test - 2", e2 instanceof First );
//
// console.log("Test - 3 ", e3 instanceof Error );
// console.log("Test - 4 ", e3 instanceof First );
// console.log("Test - 5 ", e3 instanceof Second );

const x = new mongoose.Types.ObjectId().toHexString()
const y = mongoose.Types.ObjectId().toHexString()

console.log("Research", x, y);







// export class TestError  {
//   constructor(message: string) {
//     // super(message);
//   }
// }
//
// export class TestError_2 extends TestError {
//   constructor(msg: string) {
//     super(msg);
//   }
// }
//
// export class TestError_3 extends TestError_2 {
//   constructor() {
//     super("Test Error _3_");
//   }
// }
