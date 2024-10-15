const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	try {
		const token = req.header("Authorization").split(" ")[1];
		if (!token) {
			return res.status(401).json({ error: "Token não fornecido" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.userId = decoded.id;
		req.userRole = decoded.role;

		next();
	} catch (err) {
		return res.status(500).json({ error: "Token inválido" });
	}
};
