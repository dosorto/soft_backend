const db = require("../models/puntoDeVentas");
const bcrypt = require("bcryptjs");
const config = require("../config/auth.config.js");
const controller = require("../controllers/auth.controller");
const { DB } = require("./db.config");
const Role = db.role;
const User = db.user;
const Empleado = db.empleado;
const Permiso = db.permiso;
const TipoPag = db.tipopago;
const Cliente = db.cliente;
const Talonario = db.talonario;
const Vents = db.ventas;
const Sesion = db.sesion;
const Numer = db.numero;
const Fact = db.factura;


exports.initial = async () => {
    try {
        const existeRol = await Role.count();
        if (existeRol !== 0) {
            return  existeRol;
        }

        const role = await Role.create({
            id: 1,
            rol: "root",
            descripcion: "super usuario",
        });
        const permisos = await Permiso.bulkCreate([{
            permiso: "Modulo de Ventas",
            descripcion: "Acceder al modulo de Ventas"
        },{
            permiso: "Facturas",
            descripcion: "Acceder al modulo Facturas"
        }]);
        await role.addPermisos(permisos[0]);
        await role.addPermisos(permisos[1]);
        Empleado.create({
            id: 1,
            nombre: "root",
            apellido: "root",
            sexo: "M",
        });
        User.create({
            usuario: "root",
            password: bcrypt.hashSync(config.secret, 8),
            email: "root@soft.com",
            idEmpleado: 1,
            idRol: 1
        });
        //tipo de pago WJOE1995
        TipoPag.create({
            idTipoPago: 1,
            tipoDePago: "Efectivo",
            descripcionTipoPago: "Pago en efectivo",
        });
        TipoPag.create({
            idTipoPago: 2,
            tipoDePago: "Tarjeta Credito/Debito",
            descripcionTipoPago: "Pago con tarjeta de credito/debito",
        });
        TipoPag.create({
            idTipoPago: 3,
            tipoDePago: "Credito",
            descripcionTipoPago: "Factura que sera pagada en determinado tiempo",
        });
        TipoPag.create({
            idTipoPago: 4,
            tipoDePago: "Contado",
            descripcionTipoPago: "Factura que sera pagada al momento de la venta",
        });
        Cliente.create({
            dni: "1709-1995-00562",
            email: "wjoe1995@live.com",
            rtn: "17091995005624",
            nombreCliente: "Willian Josue",
            direccion: "San Lorenzo, Valle",
            telefonoCliente: "9813-9935"
        });
        Cliente.create({
            dni: "0611-1955-00493",
            email: "pedroortez174@gmail.com",
            rtn: "0611955004930",
            nombreCliente: "Pedro Juan",
            direccion: "San Lorenzo, Valle",
            telefonoCliente: "9825-6668"
        });
        Cliente.create({
            dni: "1709-1969-00551",
            email: "anapastoraeuceda16@gmail.com",
            rtn: "17091969005512",
            nombreCliente: "Ana Pastora Euceda Mata",
            direccion: "El Tular, Nacaome, Valle",
            telefonoCliente: "8766-6076"
        });
        Cliente.create({
            dni: "0611-1986-00847",
            email: "maytirivera0611@gmail.com",
            rtn: "0611986008472",
            nombreCliente: "Mayti Melissa Rivera Carbajal",
            direccion: "Los Limones, Pespire, Choluteca",
            telefonoCliente: "9998-9588"
        });
        Talonario.create({
            rangoInicialFactura: "000-001-01-00110701",
            rangoFinalFactura: "000-001-01-00112000",
            cai: "EAF199-B70479-5343AB-538F3E-045B55-C6",
            fechaLimiteEmision: "2025-06-03",
            active: true,
            isDelete: false
        });
        Talonario.create({
            rangoInicialFactura: "000-001-01-00112001",
            rangoFinalFactura: "000-001-01-00112500",
            cai: "EAF199-B70479-5343AB-538F3E-045C35-C6",
            fechaLimiteEmision: "2030-06-03",
            active: false,
            isDelete: false
        });           
        Sesion.create({
            fecha: "2020-06-03",
            token: "123456789",
            idUsuario: 1
        });
        Vents.create({
            totalISV: 0,
            totalVenta: 5432.23,
            totalDescuentoVenta: 0,
            puntoDeEmision: "001",
            establecimiento: "001",
            tipo: "01",
            idSesion: 1,
            idUsuario: 1,
            idCliente: 1
        });
        Vents.create({
            totalISV: 500,
            totalVenta: 50000,
            totalDescuentoVenta: 5076.23,
            puntoDeEmision: "001",
            establecimiento: "001",
            tipo: "01",
            idSesion: 1,
            idUsuario: 1,
            idCliente: 2
        });
        Vents.create({
            totalISV: 2300,
            totalVenta: 23000,
            totalDescuentoVenta: 2376.23,
            puntoDeEmision: "001",
            establecimiento: "001",
            tipo: "01",
            idSesion: 1,
            idUsuario: 1,
            idCliente: 3
        });
        Vents.create({
            totalISV: 0,
            totalVenta: 5765.23,
            totalDescuentoVenta: 0,
            puntoDeEmision: "001",
            establecimiento: "001",
            tipo: "01",
            idSesion: 1,
            idUsuario: 1,
            idCliente: 4
        });
        Vents.create({
            totalISV: 0,
            totalVenta: 5654.23,
            totalDescuentoVenta: 0,
            puntoDeEmision: "001",
            establecimiento: "001",
            tipo: "01",
            idSesion: 1,
            idUsuario: 1,
            idCliente: 4
        });
        Vents.create({
            totalISV: 0,
            totalVenta: 4564.23,
            totalDescuentoVenta: 0,
            puntoDeEmision: "001",
            establecimiento: "001",
            tipo: "01",
            idSesion: 1,
            idUsuario: 1,
            idCliente: 1
        });
        Vents.create({
            totalISV: 0,
            totalVenta: 2345.53,
            totalDescuentoVenta: 0,
            puntoDeEmision: "001",
            establecimiento: "001",
            tipo: "01",
            idSesion: 1,
            idUsuario: 1,
            idCliente: 2
        });
        Vents.create({
            totalISV: 0,
            totalVenta: 45000.23,
            totalDescuentoVenta: 0,
            puntoDeEmision: "001",
            establecimiento: "001",
            tipo: "01",
            idSesion: 1,
            idUsuario: 1,
            idCliente: 3
        });
        Numer.create({ 
            puntoEmision: '000',    
            establecimiento: '001', 
            tipo: '01', 
            correlativo: '00110701', 
            numero: '001-00110701',
            idTalonario: 1, 
        });
        Numer.create({
            puntoEmision: '000',
            establecimiento: '001',
            tipo: '01',
            correlativo: '00110702',
            numero: '001-00110702',
            idTalonario: 1,
        });
        Numer.create({
            puntoEmision: '000',
            establecimiento: '001',
            tipo: '01',
            correlativo: '00110703',
            numero: '001-00110703',
            idTalonario: 1,
        });
        Numer.create({
            puntoEmision: '000',
            establecimiento: '001',
            tipo: '01',
            correlativo: '00110704',
            numero: '001-00110704',
            idTalonario: 1,
        });
        Numer.create({
            puntoEmision: '000',
            establecimiento: '001',
            tipo: '01',
            correlativo: '00110705',
            numero: '001-00110705',
            idTalonario: 1,
        });
        Numer.create({
            puntoEmision: '000',
            establecimiento: '001',
            tipo: '01',
            correlativo: '00110706',
            numero: '001-00110706',
            idTalonario: 1,
        });
        Numer.create({
            puntoEmision: '000',
            establecimiento: '001',
            tipo: '01',
            correlativo: '00110707',
            numero: '001-00110707',
            idTalonario: 1,
        });
        Numer.create({
            puntoEmision: '000',
            establecimiento: '001',
            tipo: '01',
            correlativo: '00110708',
            numero: '001-00110708',
            idTalonario: 1,
        });
        Fact.create({
            idFactura: 1,
            numeroFactura: "001-00110701",
            fechaFactura: "2020-06-03",
            descuentoTotalFactura: 0,
            isvTotalFactura: 0,
            totalFactura: 5432.23,
            subTotalFactura: 5432.23,
            cantidadLetras: "CINCO MIL TRESCIENTOS TREINTA Y DOS SOLES CON 23/100",
            estado: true,
            idTipoPago: 1,
            idCliente: 1,
            idUsuario: 1,
            idEmpleado: 1,
            idVenta: 1,
            idTalonario: 1,
            idNumero: 1
        });
        Fact.create({
            idFactura: 2,
            numeroFactura: "001-00110702",
            fechaFactura: "2020-06-03",
            descuentoTotalFactura: 0,
            isvTotalFactura: 0,
            totalFactura: 50000,
            subTotalFactura: 50000,
            cantidadLetras: "CINCUENTA MIL 00/100",
            estado: true,
            idTipoPago: 1,
            idCliente: 2,
            idUsuario: 1,
            idEmpleado: 1,
            idVenta: 2,
            idTalonario: 1,
            idNumero: 2
        });
        Fact.create({
            idFactura: 3,
            numeroFactura: "001-00110703",
            fechaFactura: "2020-06-03",
            descuentoTotalFactura: 0,
            isvTotalFactura: 0,
            totalFactura: 23000,
            subTotalFactura: 23000,
            cantidadLetras: "VEINTITRES MIL 00/100",
            estado: true,
            idTipoPago: 2,
            idCliente: 3,
            idUsuario: 1,
            idEmpleado: 1,
            idVenta: 3,
            idTalonario: 1,
            idNumero: 3
        });
        Fact.create({
            idFactura: 4,
            numeroFactura: "001-00110704",
            fechaFactura: "2020-06-03",
            descuentoTotalFactura: 0,
            isvTotalFactura: 0,
            totalFactura: 5654.23,
            subTotalFactura: 5654.23,
            cantidadLetras:"CINCO MIL SEISCIENTOS CINCUENTA Y CUANTRO 23/100",
            estado: true,
            idTipoPago: 2,
            idCliente: 4,
            idUsuario: 1,
            idEmpleado: 1,
            idVenta: 4,
            idTalonario: 1,
            idNumero: 4
        });
        Fact.create({
            idFactura: 5,
            numeroFactura: "001-00110705",
            fechaFactura: "2020-06-03",
            descuentoTotalFactura: 0,
            isvTotalFactura: 0,
            totalFactura: 7654.23,
            subTotalFactura: 7654.23,
            cantidadLetras: "SIETE MIL SEISCIENTOS CINCUENTA Y CUANTRO 23/100",
            estado: true,
            idTipoPago: 3,
            idCliente: 2,
            idUsuario: 1,
            idEmpleado: 1,
            idVenta: 5,
            idTalonario: 1,
            idNumero: 5
        });
        Fact.create({
            idFactura: 6,
            numeroFactura: "001-00110706",
            fechaFactura: "2020-06-03",
            descuentoTotalFactura: 0,
            isvTotalFactura: 0,
            totalFactura: 8654.23,
            subTotalFactura: 8654.23,
            cantidadLetras: "OCHO MIL SEISCIENTOS CINCUENTA Y CUANTRO 23/100",
            estado: true,
            idTipoPago: 3,
            idCliente: 4,
            idUsuario: 1,
            idEmpleado: 1,
            idVenta: 6,
            idTalonario: 1,
            idNumero: 6
        });
        Fact.create({
            idFactura: 7,
            numeroFactura: "001-00110707",
            fechaFactura: "2020-06-03",
            descuentoTotalFactura: 0,
            isvTotalFactura: 0,
            totalFactura: 9654.23,
            subTotalFactura: 9654.23,
            cantidadLetras: "NUEVE MIL SEISCIENTOS CINCUENTA Y CUANTRO 23/100",
            estado: true,
            idTipoPago: 4,
            idCliente: 2,
            idUsuario: 1,
            idEmpleado: 1,
            idVenta: 7,
            idTalonario: 1,
            idNumero: 7
        });
        Fact.create({
            idFactura: 8,
            numeroFactura: "001-00110708",
            fechaFactura: "2020-06-03",
            descuentoTotalFactura: 0,
            isvTotalFactura: 0,
            totalFactura: 10654.23,
            subTotalFactura: 10654.23,
            cantidadLetras: "DIEZ MIL SEISCIENTOS CINCUENTA Y CUANTRO 23/100",
            estado: true,
            idTipoPago: 4, 
            idCliente: 4,
            idUsuario: 1,
            idEmpleado: 1,
            idVenta: 8,
            idTalonario: 1,
            idNumero: 8
        });
    } catch (error) {
        console.log(error);
    }
    

};