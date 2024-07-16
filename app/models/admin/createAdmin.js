const dbPool = require("../../config/db");

const createAdmin = async (username, password, role, name, email, whatsapp) => {
  const randomID =
    Date.now().toString() + Math.floor(Math.random() * 100000000).toString();
  const created = new Date().toISOString();

  const query = `INSERT INTO admin (id, username, password, role, name, email, whatsapp, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const selectQuery = `SELECT id, username, name, email, whatsapp, created_at FROM admin WHERE id = ?`;

  await dbPool.execute(query, [
    randomID,
    username,
    password,
    role,
    name,
    email,
    whatsapp,
    created,
  ]);

  const [rows] = await dbPool.execute(selectQuery, [randomID]);
  return rows[0];
};

module.exports = createAdmin;
