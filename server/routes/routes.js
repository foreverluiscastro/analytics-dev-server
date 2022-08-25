// Import dependencies
const router = require("express").Router();

// Import controller
const controller = require("../controllers");

// Endppoints declarations

// GET endpoints
router.get("/login", controller.get.getAllLoginData);
router.get("/signup", controller.get.getAllSignUpData);
router.get("/events", controller.get.getAllEventsData);
router.get("/services", controller.get.getAllServicesData);
router.get("/rides", controller.get.getAllRidesData);

// POST endpoints
router.post("/login", controller.post.trackLogin);
router.post("/signup", controller.post.trackSignUp);
router.post("/events", controller.post.trackEvents);
router.post("/services", controller.post.trackServices);
router.post("/rides", controller.post.trackRides);

// Export the router
module.exports = router;
