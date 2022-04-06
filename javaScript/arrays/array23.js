const arr23 = ['gopal', 1, true]
arr23.forEach((item, index) => {
    console.log(`element at ${index} position is ${item}`);
});

let arr24 = ['Alaba', 'Modric', 'Kroos', 'Benzema']
arr24.forEach((item, index) => {
    item = item + '_RM';
    console.log(item);
})
console.log(arr24);         // Inspect why this didnt work...