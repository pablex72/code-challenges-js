//Syntax spread - spread operator
const l1 = [1,2,3]
const l2 = [{...l1}, 4, 5]
const o1 = {
    a1: 'valor1',
    a2: 'valor2',
    a3: 32,
    a4: false
}
const o2 = {
    a5: 0,
    ...l1,
}
console.log(o1) // {a1: 'valor1', a2: 'valor'2}
console.log(o2) // {a3: 0, a1: 'valor1', a2:'valor2'}

console.log(l1) // [1,2,3]
console.log(l2) // [1,2,3,4,5]

function sum(x, y, z) {
    return x + y + z;
  } 
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6

  //e2. con arrays
  const dias1 = ["lunes", "martes","miercoles"]
  const dias2 = ["jueves", "viernes"]

  console.log(dias1.concat(dias2))

  const dias3 = ["lunes", "martes","miercoles"]
  const dias4 = [...dias3,"jueves", "viernes"]

  console.log(dias4)

  //e3. con objetos

  const objeto1 = {
    modelo: "Iphone 14 pro max",
    peso: 14
  }

  const objeto2 = {
    marca: "Apple"
  }

  const objeto3 = {
    ...objeto1,
    ...objeto2
  }
  console.log(objeto3)

  //e4

  const lista1 = [1,2,3]
  function suma (nu1,nu2,nu3){
      console.log(nu1+nu2+nu3)
  }

  //suma(lista1[0],lista1[1],lista1[2])
  //suma(...lista1)

  //e5 - rest operator

  function suma(...numeros){
    const resulatado = numeros.reduce(
      (prev, next) => prev + next, 0
    );
    console.log(resulatado)
  }

  suma(1,2,3,4,5,6,7)