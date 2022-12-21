//Array squared

function usingMap (){
const input = [1, 2, 3, 4, 5];
//written with Arrow function
next = input.map((num) => Math.pow(num, 2));
console.log(input)
console.log(next)
}
usingMap();

//Sum of every positive element
//const input = [1, -4, 12, 0, -3, 29, -150]; --> 42;
function sumPositive(){
    const input = [1, -4, 12, 0, -3, 29, -150];

    next = input
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
