const myNums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 1]

const newNums = myNums
                .map( (num) => num**2)
                .map( (num) => num+1)
                .filter( (num) => num >= 50)
console.log(newNums);