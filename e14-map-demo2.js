let sed = "qwertyui"
console.log([...sed])
console.log(sed.split(''))

console.log(sed.charCodeAt(3))

const facturas = [
    {
        precio: 23,
        cantidad: 1,
    },
    {
        precio: 19,
        cantidad: 2,
    },
    {
        precio: 14,
        cantidad: 2,
    },
    {
        precio: 32,
        cantidad:4
    }
]

const IVA = 1.21;

const totalFacturas = facturas.map(i => i.precio * i.cantidad * IVA)
console.log(totalFacturas)

function doubleNumbers(arr){
    return arr.map(n => n * 2)
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//2) Take an array of numbers and make them strings


function stringItUp(arr){
    return arr.map(n => n.toString())
}
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
function capitalizeNames(arr){
    // your code here
    return arr.map(name => name[0].toUpperCase() + name.substring(1))
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John"