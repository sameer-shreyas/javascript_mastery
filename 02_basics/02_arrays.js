const MNCS = ["Google", "Atlassian", "Microsoft"]

const Indian_MNCS = ["TCS", "Infosys", "Wipro"]

let all_MNCS = [...MNCS, ...Indian_MNCS]

// console.log(all_MNCS);


const arr1 = [1, 2, 4, 5, [12, 213, 213, [12 , 23, 23, 3]]]

arr2 = arr1.flat(Infinity)
// console.log(arr2);

console.log(Array.isArray("SAMEER"));
// console.log(Array.from("Sameer")) ;