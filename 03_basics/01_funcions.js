function sayMyName() {
    console.log('S');
    console.log('A');
    console.log('M');
    console.log('E');
    console.log('E');
    console.log('R');
}

// sayMyName()

function addTwoNum(number1, number2){
    return number1 + number2
}

const res = addTwoNum(1, 9)
// console.log(res);

function loginUserMessage(username = "sam"){
    if(!username){
        return "Plese enter a username"
    }
    return `${username} just logged in`
}

// console.log("Sameer");
const message = loginUserMessage("Sameer")
console.log(message);