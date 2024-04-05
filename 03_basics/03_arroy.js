const user = {
    username: "Sameer",
    price: 999,

    welcomeMsg : function() {
        console.log(`${this.username}, welcome to site`);
        console.log(this);
    }
}

// user.welcomeMsg()
// user.username = "Bilal"
// user.welcomeMsg()

// console.log(this);

// const chai = function(){
//     let username = "Sam"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "Sam"
//     console.log(this.username);
// }

// chai()

const addTwo = (num1, num2) => ({username:"chai"})

console.log(addTwo(3, 7));