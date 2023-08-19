class Alumnos {
    constructor(info) {
        this.nombre = info.nombre;
        this.edad = info.edad;
        this.nota = info.nota;
        this.asistencia = info.asistencia;
    }
}

const alumno = [
    { nombre: "marta", edad: 23, nota: 3, asistencia: "no" },
    { nombre: "juan", edad: 19, nota: 6, asistencia: "si" },
    { nombre: "santiago", edad: 21, nota: 4, asistencia: "no" },
    { nombre: "maria", edad: 32, nota: 9, asistencia: "si" },
    { nombre: "javier", edad: 26, nota: 8, asistencia: "si" },
    { nombre: "daniela", edad: 25, nota: 6, asistencia: "si" },
    { nombre: "sandra", edad: 21, nota: 5, asistencia: "no" },
    { nombre: "alejandra", edad: 18, nota: 10, asistencia: "si" },
    { nombre: "jimena", edad: 20, nota: 7, asistencia: "si" },
    { nombre: "paz", edad: 26, nota: 6, asistencia: "si" },
];

let nombreAlumno = prompt("Ingrese el nombre del alumno").toLowerCase();

const alumnoIngresado = alumno.find((item) => item.nombre === nombreAlumno);

if (alumnoIngresado) {
    alert(`La nota de ${alumnoIngresado.nombre} es: ${alumnoIngresado.nota}`)
}
else {
    alert("El alumno no se encuentra")
}

const asistencia = alumno.filter((item) => item.asistencia === "si").length;
const falta = alumno.filter((item) => item.asistencia === "no").length;

alert(`${asistencia} alumnos vinieron`)
alert(`${falta} alumnos faltaron`)

const notaAprobada = alumno.filter(item => item.nota >= 6).map(item => item.nombre);
alert(`Los alumnos aprobados del curso son ${notaAprobada}`)

const notaDesaprobada = (alumno.filter(item => item.nota < 6)).map(item => item.nombre);
alert(`Los alumnos desaprobados del curso son ${notaDesaprobada}`)

const notaTotal = alumno.reduce((sumar, item) => sumar + item.nota, 0);
const edadTotal = alumno.reduce((sumar, item) => sumar + item.edad, 0);

let notaPromedio = notaTotal / alumno.length;
let edadPromedio = edadTotal / alumno.length;

alert(`La nota promedio del curso es ${notaPromedio}`)
alert(`La edad promedio del curso es ${edadPromedio}`)