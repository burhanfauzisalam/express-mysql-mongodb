const dbPool = require("../../config/db");

const getUser = async (id) => {
  const selectQuery = `SELECT id, username, role, name, email, whatsapp, gender, created_at FROM teachers WHERE id = ?`;

  // Eksekusi query untuk mengambil data pengguna berdasarkan ID
  const [rows] = await dbPool.execute(selectQuery, [id]);

  // Mengembalikan data pengguna jika ditemukan
  return rows.length > 0 ? rows[0] : null;
};

module.exports = getUser;
