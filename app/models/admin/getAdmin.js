const dbPool = require("../../config/db");

const getAdmin = async (id) => {
  const selectQuery = `SELECT username, role, name, email, whatsapp FROM admin WHERE id = ?`;

  const [data] = await dbPool.execute(selectQuery, [id]);
  return data[0];
};

module.exports = getAdmin;
