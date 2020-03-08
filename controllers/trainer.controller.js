var { Trainer, Class, Asset } = require("../models/models");

async function getSingleTrainer(req, res, next) {
	try {
		let trainer = await Trainer.findByPk(parseInt(req.params.id), { include: [ Class ] });
		res.json(trainer);
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
}

async function getAllTrainers(req, res, next) {
	try {
		let trainers = await Trainer.findAll();
		res.json(trainers);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function createSingleTrainer(req, res, next) {
	try {
		let trainer = await Trainer.create({
			trainerName: req.fields.trainerName
		});
		res.json(trainer);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

module.exports = {
	createSingleTrainer,
	getSingleTrainer,
	getAllTrainers
};
