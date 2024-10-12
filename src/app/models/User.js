const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const sequelize = require("../../config/database");

const User = sequelize.define(
	"User",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: "nome",
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			field: "senha",
		},
		role: {
			type: DataTypes.ENUM("admin", "user"),
			allowNull: false,
			defaultValue: "user",
		},
	},
	{
		tableName: "usuarios",
		hooks: {
			beforeCreate: async (user) => {
				user.password = await bcrypt.hash(user.password, 8);
			},
		},
		timestamps: false,
	}
);

module.exports = User;
