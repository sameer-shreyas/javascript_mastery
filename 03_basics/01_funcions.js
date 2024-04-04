function sayMyName() {
    console.log('S');
    console.log('A');
    console.log('M');
    console.log('E');
    console.log('E');
    console.log('R');
}

// sayMyName()

function addTwoNum(...number1){
    return number1
}

const res = addTwoNum(1, 9, 4, 5, 6)
// console.log(res);

function loginUserMessage(username = "sam"){
    if(!username){
        return "Plese enter a username"
    }
    return `${username} just logged in`
}

// console.log("Sameer");
const message = loginUserMessage("Sameer")
// console.log(message);

function handleObjects(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObjects({
    username: "Sameer",
    price: 500
})