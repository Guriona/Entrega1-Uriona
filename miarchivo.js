

let cantidadAlumnos = parseInt(prompt("Ingrese cantidad de alumnos"));

let notaTotal = 0;

let cantidadAprobados = 0;

let cantidadNoAprobados = 0;

for (let i = 1; i <= cantidadAlumnos; i++) {

    let nota = parseInt(prompt(`Ingrese la nota del alumno ${i}`));

    if (nota >= 0 && nota <= 3) {
        alert("No esta aprobado")
    }
    else if (nota > 3 && nota < 10) {
        alert("Esta aprobado")
    }
    else {
        alert("Excelente")
    }

    notaTotal = notaTotal + nota;
    cantidadAprobados += nota > 3 && nota <= 10;
    cantidadNoAprobados += nota >= 0 && nota <= 3;
}

const promedio = notaTotal / cantidadAlumnos;

alert(`El promedio de notas de los alumnos es ${promedio}`)

alert(`La cantidad de alumnos aprobados es ${cantidadAprobados}`)

alert(`La cantidad de alumnos desaprobados es ${cantidadNoAprobados}`)
