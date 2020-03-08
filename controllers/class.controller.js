var { Class, Trainer, Asset, User } = require("../models/models");

async function getSingleClass(req, res, next) {
	try {
		let classData = await Class.findByPk(parseInt(req.params.id), { include: [ Trainer, Asset, User ] });
		res.json(classData);
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
}

async function getAllClasses(req, res, next) {
	try {
		let classData = await Class.findAll({ include: [ Trainer, Asset ] });
		res.json(classData);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function createSingleClass(req, res, next) {
	try {
		let classData = await Class.create({
			className: req.fields.className,
			classDescription: req.fields.classDescription,
			classDay: req.fields.classDay,
			classTime: req.fields.classTime,
			maxParticipants: req.fields.maxParticipants,
			trainerId: req.fields.trainerId,
			assetId: req.fields.assetId
		});
		res.json(classData);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

module.exports = {
	createSingleClass,
	getSingleClass,
	getAllClasses,
};
