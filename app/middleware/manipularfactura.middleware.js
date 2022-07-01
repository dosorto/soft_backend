const validarCamposCliente = (req, res, next) => {
    const {nombreCliente, rtn, dni} = req.query;
    const regexNum = /^\d+$/

    if (!nombreCliente && !rtn && !dni) {
        return res.status(400).json({
            error: 'Los campos nombreCliente, rtn y DNI están vacios. Por favor ingrese uno de ambos para realizar la búsqueda.'
        })
    }

    if (!nombreCliente) {
        if (!rtn) {
            if (!regexNum.test(dni.trim())) {
                return res.status(400).json({
                    error: 'El DNI debe ser de tipo numérico y no debe contener espacios.'
                })
            }
        }else{
            if (!regexNum.test(rtn.trim())) {
            return res.status(400).json({
                error: 'El RTN debe ser de tipo numérico y no debe contener espacios.'
                })
            }
        }
    }
    next();
}

const validarCamposTalonario = (req, res, next) => {
    const {idTalonario, cai} = req.query;
    const regexId = /^\d+$/

    if (!idTalonario && !cai) {
        return res.status(400).json({
            error: 'Los campos idTalonario y cai están vacios. Por favor ingrese uno de ambos para realizar la búsqueda.'
        })
    }

    if (!cai) {
        if (!regexId.test(idTalonario.trim())) {
            return res.status(400).json({
                error: 'El idTalonario debe ser de tipo numérico y no debe contener espacios.'
            })
        }
    }

    if (cai && idTalonario) {
        if (!regexId.test(idTalonario.trim())) {
            return res.status(400).json({
                error: 'El idTalonario debe ser de tipo numérico y no debe contener espacios.'
            })
        }
    }
    next();
}

const validarCamposFecha = (req, res, next) => {
    const {fecha1, fecha2} = req.query;
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/

    if(!fecha1 && !fecha2) return res.status(400).json({
        message: 'Debe indicar al menos una fecha para aplicar el filtro.'
    })
    if (!fecha2) {
        if (!regexFecha.test(fecha1.trim())) return res.status(400).json({
            Error: 'Formato de fecha inválido, ingrese la fecha en formato AAAA-MM-DD'});
    } else {
        if (!regexFecha.test(fecha1.trim())) return res.status(400).json({
            Error: 'Formato de fecha inválido, ingrese la fecha en formato AAAA-MM-DD'});
        if (!regexFecha.test(fecha2.trim())) return res.status(400).json({
            Error: 'Formato de fecha inválido, ingrese la fecha en formato AAAA-MM-DD'});
    }
    next();
}

module.exports = {
    validarCamposCliente,
    validarCamposTalonario,
    validarCamposFecha,
}