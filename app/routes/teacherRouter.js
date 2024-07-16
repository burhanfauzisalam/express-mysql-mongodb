const express = require("express");
const teacherAuth = require("../middlewares/teacherMiddleware");
const adminAuth = require("../middlewares/adminMiddleware");
const TeacherController = require("../controllers/teachers");

const router = express.Router();

router.get("/teachers", adminAuth, TeacherController.getAllTeachers);
router.post("/teacher", adminAuth, TeacherController.createTeacher);
router.delete("/teacher", teacherAuth, TeacherController.deleteTeacher);
router.get("/teacher", teacherAuth, TeacherController.getTeacher);
router.post("/teacher/login", TeacherController.loginTeacher);

module.exports = router;
