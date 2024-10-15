require("dotenv").config();

const express = require("express");

const authRoutes = require("./routes");

require("./database");

class App {
	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		this.server.use("/api", authRoutes);
	}
}

module.exports = new App().server;
