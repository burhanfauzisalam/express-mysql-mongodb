const adminModel = require("../../models/admin");

const getAdmin = async (req, res) => {
  const { id } = req.query;
  try {
    const data = await adminModel.getAdmin(id);
    res.status(200).json({
      message: "Admin found",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

module.exports = getAdmin;
