const router = require('express').Router();

const authRoutes = require("./authRoutes");
const usersRoutes = require("./usersRoutes");
const studentsRoutes = require("./studentsRoutes");
const activitiesRoutes = require("./activitiesRoutes");

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/students", studentsRoutes);
router.use("/activities", activitiesRoutes);

module.exports = router;