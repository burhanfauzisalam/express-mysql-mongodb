const dbPool = require("../../config/db");

const deleteUser = async (id) => {
  const query = `DELETE from teachers WHERE id=?`;
  await dbPool.execute(query, [id]);
};

module.exports = deleteUser;
