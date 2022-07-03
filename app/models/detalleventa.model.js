module.exports = (sequelize, Sequelize) => {
    const DetalleVenta = sequelize.define("detalleventas", {
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: false, //no permite nulos
        },
        precioUnitario:{
            type: Sequelize.DECIMAL,
            allowNull: false, //no permite nulos
        },
        isvAplicado: {
            type: Sequelize.DECIMAL,
            allowNull: false, //no permite nulos
        },
        descuentoAplicado: {
            type: Sequelize.DECIMAL,
            allowNull: false, //no permite nulos
        },
        totalDetalleVenta: { // multiplicacion (cantidad* precioUnitario) +ISV -DESC
            type: Sequelize.DECIMAL,
        },

        isDelete: {
            type: Sequelize.BOOLEAN,
            allowNull: false,  //no permite valores nulos
            defaultValue: false //establece el valor por defecto en false
        }
    });
    return DetalleVenta;
};
