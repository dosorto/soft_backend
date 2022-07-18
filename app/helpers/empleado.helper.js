const validarCamposEmpleado = (empleado, id, dni, nombre, apellido, direccion, telefono, fechaNacimiento, sexo, isDelete) => {
    if (id) {
        empleado.id = id;
    }
    if (dni){
        empleado.dni = dni;
    }
    if (nombre) {
        empleado.nombre = nombre;
    }

    if (apellido) {
        empleado.apellido = apellido;
    }

    if (direccion) {
        empleado.direccion = direccion;
    }


    if (telefono) {
        empleado.telefono = telefono;
    }

    if (fechaNacimiento) {
        empleado.fechaNacimiento = fechaNacimiento;
    }

    if (sexo) {
        empleado.sexo = sexo;
    }

    if (isDelete) {
        empleado.isDelete = isDelete;
    }

    return empleado;
}
module.exports = {
    validarCamposEmpleado,
}