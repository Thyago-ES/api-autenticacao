require("dotenv").config();

const express = require("express");
const sequelize = require("./config/database");

const authRoutes = require("./routes");

const app = express();

app.use(express.json());

app.use("/api", authRoutes);

const port = process.env.PORT || 3000;

sequelize
	.sync()
	.then(() => {
		app.listen(port, () => {
			console.log(`Servidor rodando na porta ${port}`);
		});
	})
	.catch((err) => {
		console.error("Erro ao sincronizar banco de dados", err);
	});
