module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("clientes", {
        rtn: {
            type: Sequelize.STRING,
            allowNull: false, //no permite nulos
        },
        nombreCliente:{
            type: Sequelize.STRING,
            allowNull: false, //no permite nulos
        },
        direccion: {
            type: Sequelize.STRING,
            allowNull: false, //no permite nulos
        },
        telefonoCliente: {
            type: Sequelize.STRING,
        },
        isDelete: {
            type: Sequelize.BOOLEAN,
            allowNull: false,  //no permite valores nulos
            defaultValue: false //establece el valor por defecto en false
        }
    });
    return Cliente;
};