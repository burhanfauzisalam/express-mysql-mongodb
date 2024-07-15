const dbPool = require("../../config/db");

const getAllUsers = () => {
  const SQLQuery =
    "SELECT id, username, role, name, email, whatsapp, gender, created_at FROM teachers ORDER BY created_at DESC";

  return dbPool.execute(SQLQuery);
};

module.exports = getAllUsers;
