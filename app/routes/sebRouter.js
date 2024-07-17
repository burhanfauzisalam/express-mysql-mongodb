const express = require("express");
const teacherAuth = require("../middlewares/teacherMiddleware");

const sebController = require("../controllers/seb");

const router = express.Router();

router.post("/seb", teacherAuth, sebController.uploadSeb);
router.get("/seb", sebController.allSebFiles);
router.delete("/seb", teacherAuth, sebController.deleteSeb);

module.exports = router;
