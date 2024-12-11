require("dotenv").config();

const express = require("express");

const authRoutes = require("./routes");
const simpleRoute = require("./simpleRoute");

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
		this.server.use(simpleRoute);
	}
}

module.exports = new App().server;
