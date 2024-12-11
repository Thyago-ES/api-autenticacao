const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthController {
	async register(req, res) {
		try {
			let user = await User.findOne({ where: { email: req.body.email } });
			if (user) {
				return res.status(400).json({ error: "Email já registrado" });
			}

			user = await User.create(req.body);
			res.status(201).json({
				message: "Usuário criado com sucesso",
				user: {
					id: user.id,
					name: user.name,
				},
			});
		} catch (err) {
			return res.status(500).json({ error: "Erro ao registrar usuário" });
		}
	}

	async login(req, res) {
		try {
			const { email, password } = req.body;

			let user = await User.findOne({ where: { email } });
			if (!user) {
				return res.status(404).json({ error: "Usuário não encontrado" });
			}

			if (!(await bcrypt.compare(password, user.password))) {
				return res.status(400).json({ error: "Credenciais incorretas" });
			}

			const token = jwt.sign(
				{ id: user.id, role: user.role },
				process.env.JWT_SECRET,
				{
					expiresIn: "1h",
				}
			);

			return res.status(200).json({ token });
		} catch (err) {
			return res.status(500).json({ error: "Erro ao fazer login" });
		}
	}
}

module.exports = new AuthController();
