const adminModel = require("../../models/admin");

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await adminModel.loginAdmin(username, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

module.exports = loginAdmin;
