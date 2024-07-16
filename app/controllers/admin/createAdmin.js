const adminModel = require("../../models/admin");

const createAdmin = async (req, res) => {
  const { username, password, role, name, email, whatsapp } = req.body;
  try {
    const cek = await adminModel.cekAdmin(username, email, whatsapp);
    if (cek) {
      return res
        .status(400)
        .json({ message: "Admin already exist with current data" });
    }
    const data = await adminModel.createAdmin(
      username,
      password,
      role,
      name,
      email,
      whatsapp
    );
    res.status(201).json({
      message: "New admin created",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

module.exports = createAdmin;
