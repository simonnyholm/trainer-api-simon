var { createSingleUser, getSingleUser, addToClass, removeFromClass } = require("../controllers/user.controller");
var { isAuthorized, isRelevantUser } = require("../middleware/auth");

module.exports = function(router) {
	router.post("/api/v1/users", createSingleUser);
	router.get("/api/v1/users/:id", isAuthorized, isRelevantUser, getSingleUser);
	router.post("/api/v1/users/:id/classes/:classId", isAuthorized, addToClass);
	router.delete("/api/v1/users/:id/classes/:classId", isAuthorized, removeFromClass);
};
