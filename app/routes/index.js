const express = require("express");
const adminRouter = require("./adminRouter");
const teacherRouter = require("./teacherRouter");

const router = express.Router();

// Use the routers
router.use("/api", adminRouter);
router.use("/api", teacherRouter);

module.exports = router;
