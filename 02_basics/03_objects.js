
const mysym = Symbol("key1")
const JSuser = {
    name:"Sameer",
    age:21,
    [mysym] : "mykey1",
    Collage:"NSUT"
}
// console.log(JSuser.name);
// console.log(JSuser["name"]);
// console.log(JSuser[mysym]);


JSuser.name = "Samir"
// Object.freeze(JSuser)
JSuser.name = "Amir"
// console.log(JSuser);

JSuser.greeting  =  function(){
    console.log("Hello js user");
}
JSuser.greetingTwo  =  function(){
    console.log(`Hello js user, ${this.name}`);
}
JSuser.greeting()
JSuser.greetingTwo()