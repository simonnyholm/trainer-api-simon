var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");

class Reservation extends Model {};

Reservation.init({
	table: DataTypes.INTEGER,
	date: DataTypes.DATE
}, { sequelize, modelName: "reservation" });

sequelize.sync({ force:true })
	.then(function() {
		console.log("Tabel created: Reservation");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Reservation;
