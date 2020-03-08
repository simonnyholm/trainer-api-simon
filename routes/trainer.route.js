var { createSingleTrainer, getSingleTrainer, getAllTrainers } = require("../controllers/trainer.controller");

module.exports = function(router) {
	router.post("/api/v1/trainers", createSingleTrainer);
	router.get("/api/v1/trainers/:id", getSingleTrainer);
	router.get("/api/v1/trainers", getAllTrainers);
};
