const dbPool = require("../../config/db");
const jwt = require("jsonwebtoken");

const loginAdmin = async (username, password) => {
  const query = `SELECT id, username, name, role FROM admin WHERE username=? AND password=?`;
  const [data] = await dbPool.execute(query, [username, password]);
  const token = jwt.sign(data[0], process.env.ADMIN_KEY, {
    expiresIn: "1h",
  });
  return token;
};

module.exports = loginAdmin;
