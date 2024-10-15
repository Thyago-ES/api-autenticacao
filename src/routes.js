const { Router } = require("express");

const AuthController = require("./app/controllers/AuthController");

const authMiddleware = require("./app/middlewares/authMiddleware");

const routes = new Router();

routes.post("/register", AuthController.register);
routes.post("/login", AuthController.login);

routes.get("/protected", authMiddleware, (req, res) => {
	return res.status(200).json({ message: "Você está autenticado!" });
});

module.exports = routes;
