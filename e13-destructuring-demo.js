const arreglo = [1,2,3,4,5]
console.log(arreglo[2])

const [valor1,valor2,valor3] =arreglo
console.log(valor2)

let dias = ["lunes", "martes","miercoles","jueves","viernes","sabado","domingo"]
console.log(dias[3])

let [dia1,,,dia4] = dias
console.log(dia4) 

let meses = ["enero","febrero","marzo","abril","mayo","junio","agosto"]
let [mes1,...restoDeMeses] = meses

console.log(restoDeMeses)
console.log([mes1,...restoDeMeses])
console.log(mes1)
console.log(mes1,...restoDeMeses)
console.log([...restoDeMeses])


//objetos
const persona ={
    id: 10,
    nombre: "Catalina"
}
console.log(persona.nombre)

const {id, nombre} = persona
console.log(nombre)

const cadena = "Juan"
const {length} = cadena
console.log(length)

//e5
const listaNumeros = [1,2,3,4,5,6,7,8,9];
const [po1,po2,po3, ...restDeElementos] = listaNumeros
console.log(po1,po2, restDeElementos)

const persona1 ={
    nombre: "Juan",
    apellido: "Perez",
    edad: 89
};

const persona2 ={
    nombre: "Juan",
    apellido: "Perez",
    edad2: 89
};

const {edad, apellido} = persona1;
console.log(edad,apellido)

const { edad2, ...restoPersona} = persona2
console.log(edad, restoPersona)

//e7
const alumno = {
    alNombre : "pepe",
    alApellido : "soto",
    alEdad : 32,
    alDireccion: {
        calle: "calee321",
        codigoPostal: 432
    }
}

/* const { alNombre, alDireccion } = alumno;
console.log(nombre, alDireccion)

const{ calle, codigoPostal } = alDireccion
console.log(alNombre, calle, codigoPostal)
 */
const {alNombre, alDireccion:{calle,codigoPostal}} = alumno
console.log(alNombre, calle, codigoPostal)

//e8 - ejemplo swap de variables

let nombre3 = "juan";
let apellido3 = "perez";

[apellido3, nombre3] = [nombre3, apellido3];

console.log(nombre3, apellido3)

