var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");

class Table extends Model {};

Table.init({
	tableNumber: DataTypes.TEXT,
	tableSeats: DataTypes.TEXT,
	asset: DataTypes.INTEGER
}, { sequelize, modelName: "table" });

sequelize.sync({ force:true })
	.then(function() {
		console.log("Tabel created: Table");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Table;
