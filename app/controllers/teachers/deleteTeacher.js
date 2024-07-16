const teacherModel = require("../../models/teachers");

const deleteTeacher = async (req, res) => {
  const id = req.id;
  try {
    await teacherModel.deleteTeacher(id);
    res.status(200).json({
      message: "Teacher deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = deleteTeacher;
