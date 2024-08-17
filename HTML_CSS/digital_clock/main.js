// async function apiCall() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("b");
//     }, 50);
//   });
// }

// async function logger() {
//   setTimeout(() => console.log("a"), 10);
//   console.log(await apiCall());
//   console.log("c");
// }

// logger();

// const myArray = new Array(2);
// myArray[1] = 1;
// myArray[3] = 3;
// console.log("Length:", myArray.length);
// console.log("Elements:");
// for (const element of myArray) {
//   console.log("\t", element);
// }

// const arr = [];
// try {
//   arr.push("try");
//   throw new Error();
// } catch (e) {
//   arr.push("catch");
// } finally {
//   arr.push("finally");
// }

// let x = 0;
// parent.addEventListener("click", () => x++);
// child.addEventListener("click", () => {
//   event.preventDefault();
//   x++;
// });

// let green;
// grnee = false;
// console.log(grnee);

// function* gen1() {
//   console.log(yield 1);
//   console.log(yield 2);
//   console.log(yield 3);
// }

// const iterator = gen1();
// console.log(iterator.next("a").value);
// console.log(iterator.next("b").value);
// console.log(iterator.next("c").value);

const myQueue = Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
const r1 = myQueue.dequeue() === 1;
const r2 = myQueue.dequeue() === 2;
console.log(r1 & r2);
