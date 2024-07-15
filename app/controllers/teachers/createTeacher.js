const teacherModel = require("../../models/teachers");

const createTeacher = async (req, res) => {
  const { username, password, role, name, email, whatsapp, gender } = req.body;

  try {
    const cekTeacher = await teacherModel.cekTeacher(username, email, whatsapp);
    if (cekTeacher) {
      return res.status(400).json({
        message: "Teacher already exist with current data",
      });
    }
    await teacherModel.createTeacher(
      username,
      password,
      role,
      name,
      email,
      whatsapp,
      gender
    );
    res.status(201).json({
      message: "New Teacher created",
      data: { username, password, name, email, whatsapp, gender },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

module.exports = createTeacher;
