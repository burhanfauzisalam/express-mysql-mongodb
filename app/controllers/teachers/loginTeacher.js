const teacherModel = require("../../models/teachers");

const loginTeacher = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "please input username and password" });
    }
    const token = await teacherModel.loginTeacher(username, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = loginTeacher;
