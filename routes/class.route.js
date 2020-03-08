var { createSingleClass, getSingleClass, getAllClasses, getRatings, saveRating } = require("../controllers/class.controller");
var { isAuthorized } = require("../middleware/auth");

module.exports = function(router) {
	router.post("/api/v1/classes", createSingleClass);
	router.get("/api/v1/classes/:id", getSingleClass);
	router.get("/api/v1/classes", getAllClasses);
	router.get("/api/v1/classes/:id/ratings", getRatings);
	router.post("/api/v1/classes/:id/ratings", isAuthorized, saveRating);
};
