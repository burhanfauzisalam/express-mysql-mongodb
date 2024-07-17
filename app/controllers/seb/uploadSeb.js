const sebModel = require("../../models/seb");
const teacherModel = require("../../models/teachers");

const uploadSeb = async (req, res) => {
  try {
    const id = req.id;
    const teacher = await teacherModel.getTeacher(id);
    const { filename } = req.body;
    const existingFile = await sebModel.findOne({ filename });
    if (existingFile) {
      return res.status(400).json({ error: "File already exist." });
    }
    const newFile = sebModel({
      ...req.body,
      teacher: teacher.name,
    });
    await newFile.save();
    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = uploadSeb;
