const express = require("express");
const adminAuth = require("../middlewares/adminMiddleware");
const adminController = require("../controllers/admin");

const router = express.Router();

router.post("/admin", adminController.createAdmin);
router.get("/admin", adminAuth, adminController.getAdmin);
router.post("/admin/login", adminController.loginAdmin);
module.exports = router;
