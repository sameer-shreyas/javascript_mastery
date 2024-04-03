const myArray = [1, 2, 3, 4, 5]

// console.log(myArray[0]);

// myArray.push(9)
// myArray.pop()

// myArray.unshift(100)
// myArray.shift()
// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);

// console.log(myArray.indexOf(9));

console.log("A ", myArray);

const newAr1 = myArray.slice(1, 3);
console.log(newAr1);

console.log("B ", myArray);

const newArr2 = myArray.splice(1, 3);
console.log(newArr2);
console.log("C ", myArray);
//slice splice