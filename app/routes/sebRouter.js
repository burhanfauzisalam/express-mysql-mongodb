const express = require("express");
const teacherAuth = require("../middlewares/teacherMiddleware");
const adminAuth = require("../middlewares/adminMiddleware");
const teacherAndAdminAuth = require("../middlewares/teacherAndAdminMiddleware");
const sebController = require("../controllers/seb");

const router = express.Router();

router.post("/seb", teacherAuth, sebController.uploadSeb);
router.get("/seb", sebController.allSebFiles);
router.delete(
  "/seb",
  teacherAndAdminAuth(adminAuth, teacherAuth),
  sebController.deleteSeb
);

module.exports = router;
