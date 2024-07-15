const express = require("express");
const TeacherController = require("../controllers/teachers");

const router = express.Router();

router.get("/teachers", TeacherController.getAllTeachers);
router.post("/teacher", TeacherController.createTeacher);
router.delete("/teacher", TeacherController.deleteTeacher);
router.get("/teacher", TeacherController.getTeacher);

module.exports = router;
