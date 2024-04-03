// const tinderUser = new  Object()
const tinderUser = {}
tinderUser.id = "2e2321"
tinderUser.isLoggedIn = false
tinderUser.name = "Sammy"
// console.log(tinderUser);

const regularUser = {
    fullname : {
        username : {
            firstname : "Sameer",
            lastname : "Shreyas"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));