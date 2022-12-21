//Array squared

function usingMap (){
const input = [1, 2, 3, 4, 5];
//written with Arrow function
let next = input.map((num) => Math.pow(num, 2));
console.log(input)
console.log(next)
}
usingMap();

//Sum of every positive element
//const input = [1, -4, 12, 0, -3, 29, -150]; --> 42;
function sumPositive(){
    const input = [1, -4, 12, 0, -3, 29, -150];

    let next = input
    .filter(function (num) {
        return num > 0;
    })
    .reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    console.log(input);
    console.log(next);
}
sumPositive();

//Get name initials
//const input = "George Raymond Richard Martin"; --> "GRRM";
function nameInitial(){
    const input = "George Raymond Richard Martin";
    let next = input.split(" ").map((word) => word[0]).join('');
    console.log(next)
}
nameInitial();

//n! with Map and Reduce
function factorial(){
    const input = 6;
    let fact = new Array(input)
    .fill(null)
    .map((index) => index + 1)
    //.reduce((accumulator, currentValue) => accumulator * currentValue);
    console.log(null + 1);
}

factorial();