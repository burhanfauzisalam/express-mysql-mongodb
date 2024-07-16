const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.post("/admin", adminController.createAdmin);
router.get("/admin", adminController.getAdmin);

module.exports = router;
