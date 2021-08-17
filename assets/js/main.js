
// Funcion factorial
const factorial = num => {
    console.log(`### Factorial ###`);
    for (let i = 1; i <= num; i++) {
        let res = 1;
        for (let j = 1; j <= i; j++) {
            res = res * j;
        }
        console.log(`Factorial de ${i} = ${res}`);
    }
}

// funcion multiplicar
const multiplicar = (num) => {
    console.log(`### Tabla ###`);
    for (let i = 1; i <= num; i++) {
        let multiplicar = num * i;
        console.log(`  ${i} * ${num} = ${multiplicar}`);
    }

}

// funcion validar rango
const validar = () => {
    if (num >= 1 && num <= 20) {
        return true;
    } else {
        alert(` El numero ${num} se encuentra furea del rango. Ingrese otro numero`)
        return false;
    }
}


// MAIN
//  declarar variables
let num
let validacion

do {
    num = +prompt('ingresa un numero entre 1 y 20')
    validacion = validar()
} while (validacion == false);


multiplicar(num)
factorial(num)