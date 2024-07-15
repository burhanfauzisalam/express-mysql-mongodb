const teacherModel = require("../../models/teachers");

const getTeacher = async (req, res) => {
  const { id } = req.query;
  try {
    const data = await teacherModel.getTeacher(id);

    if (!data) {
      return res.status(400).json({
        message: "Teacher not found",
      });
    }
    res.status(200).json({
      message: "Teacher found",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = getTeacher;
