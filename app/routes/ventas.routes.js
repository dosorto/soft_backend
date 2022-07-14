//const { verifySignUp } = require("../middleware");
const controller = require("../controllers/ventas.controller");
const { permisosJwt } = require("../middleware");
const { authJwt } = require("../middleware");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/ventas",[authJwt.verifyToken,],[permisosJwt.isPermisos("43")], controller.crearVenta);
  app.post("/api/mostrarVentas",[authJwt.verifyToken,],[permisosJwt.isPermisos("45")], controller.mostrarVentas);
  
};