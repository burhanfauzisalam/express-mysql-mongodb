const teacherModel = require("../../models/teachers");

const getAllTeachers = async (req, res) => {
  try {
    const [data] = await teacherModel.getAllTeachers();

    if (data.length === 0) {
      return res.status(400).json({
        message: "Data empty",
        length: data.length,
        data,
      });
    }
    res.status(200).json({
      message: "Get all Teachers success",
      length: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = getAllTeachers;
