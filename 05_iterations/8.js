myNums = [1, 2, 3]

// const Total = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} currval: ${currval}`);
//     return acc + currval
// }, 0)

// const Total = myNums.reduce((acc, curr_val) => (acc + curr_val), 0)
// console.log(Total);

const ShoppingCart = [
    {
        courseName: "javascript bootcamp",
        price: 2999
    },
    {
        courseName: "mobile dev bootcamp",
        price: 12999
    },{
        courseName: "DataScience bootcamp",
        price: 62999
    },
]

const Total = ShoppingCart.reduce((acc, curr_val) => (acc + curr_val.price), 0)
console.log(Total);