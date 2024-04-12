const promiseOne = new Promise(function(resolve, reject){
     setTimeout(function(){
        console.log('Async tasks is complete');
        resolve()
     }, 1000)
}) 

promiseOne.then(function(){
    console.log(("Promise consumed"));
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async3 resolved");
})

const promiseThree = new Promise(function(res, rej){
    setTimeout(function(){
        res({username:"Chai", email:"chai@gmail.com"}); //resol
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})
const promiseFour = new Promise(function(res,rej){
    setTimeout(function(){
        let error = true;
        if(!error){
            res({username:"Hitesh", password:"123"})
        }else{
            rej('ERROR: Something went wrong')
        }
    }, 1000)
}
)

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(() => console.log("Finally, the promise is either resolev or rejected"))
// console.log(usename);

const promiseFive = new Promise(function(res,rej){
    setTimeout(function(){
        let error = true;
        if(!error){
            res({username:"javscript", password:"123"})
        }else{
            rej('ERROR: js went wrong')
        }
    }, 1000)
}
)

// promiseFive.then()
async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    } catch(err){
        console.log(err);
    }
}
consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch("https://randomuser.me/api/")
//     const data = await response.json()
//     console.log(data);
//     }   catch(err){
//         console.log(err);
//     } 
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary').then(function(res, rej){
    return res.json()
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})