var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");
var config = require("../config/sqlite");

class Asset extends Model {};

Asset.init({
	url: DataTypes.TEXT,
	name: DataTypes.TEXT,
	details: DataTypes.JSONB,
	size: DataTypes.INTEGER,
	filename: DataTypes.TEXT,
	contentType: DataTypes.TEXT
}, { sequelize, modelName: "asset" });

sequelize.sync(config[process.env.NODE_ENV])
	.then(function() {
		console.log("Table create: Asset");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Asset;
