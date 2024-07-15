const dbPool = require("../../config/db");

const createUser = async (
  username,
  password,
  role,
  name,
  email,
  whatsapp,
  gender
) => {
  const randomID =
    Date.now().toString() + Math.floor(Math.random() * 100000000).toString();
  const created = new Date().toISOString();
  const insertQuery = `INSERT INTO teachers (id, username, password, role, name, email, whatsapp, gender, created_at)
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const selectQuery = `SELECT id, username, name, email, whatsapp, gender, created_at FROM teachers WHERE id = ?`;
  // Melakukan query untuk menyimpan data pengguna
  await dbPool.execute(insertQuery, [
    randomID,
    username,
    password,
    role,
    name,
    email,
    whatsapp,
    gender,
    created,
  ]);

  // await dbPool.execute(insertToTeacher, [
  //   randomID,
  //   body.name,
  //   body.email,
  //   body.whatsapp,
  //   body.gender,
  // ]);

  // Melakukan query untuk mengambil data pengguna yang baru saja dimasukkan
  const [rows] = await dbPool.execute(selectQuery, [randomID]);

  // Mengembalikan data pengguna baru
  return rows[0];
};

module.exports = createUser;
