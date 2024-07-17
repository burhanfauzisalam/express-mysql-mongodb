const sebModel = require("../../models/seb");

const allSebFiles = async (req, res) => {
  try {
    const data = await sebModel.find();
    // console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = allSebFiles;
