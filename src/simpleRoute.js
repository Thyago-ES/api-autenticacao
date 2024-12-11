const simpleRoute = require("express").Router();

simpleRoute.get("/simple", (req, res) => {
	return res.status(200).json({ message: "Olá mundo" });
});

module.exports = simpleRoute;
