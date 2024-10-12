const { Router } = require("express");

const authController = require("./app/controllers/authController");

const authMiddleware = require("./app/middlewares/authMiddleware");

const router = new Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/protected", authMiddleware, (req, res) => {
	return res.status(200).json({ message: "Você está autenticado!" });
});

module.exports = router;
