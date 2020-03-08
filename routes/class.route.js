var { createSingleClass, getSingleClass, getAllClasses } = require("../controllers/class.controller");

module.exports = function(router) {
	router.post("/api/v1/classes", createSingleClass);
	router.get("/api/v1/classes/:id", getSingleClass);
	router.get("/api/v1/classes", getAllClasses);
};
