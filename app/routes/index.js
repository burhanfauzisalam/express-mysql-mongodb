const express = require("express");
const adminRouter = require("./adminRouter");
const teacherRouter = require("./teacherRouter");
const sebRouter = require("./sebRouter");

const router = express.Router();

// Use the routers
router.use("/api", adminRouter);
router.use("/api", teacherRouter);
router.use("/api", sebRouter);

module.exports = router;
