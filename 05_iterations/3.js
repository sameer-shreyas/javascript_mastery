const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello, How are you ?"

for (const greet of greetings) {
    // console.log(`Each chat is ${greet}`);
}

const map = new Map;

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(`${key} -> ${value}`);
}