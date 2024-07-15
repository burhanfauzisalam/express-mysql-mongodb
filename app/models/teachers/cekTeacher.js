const dbPool = require("../../config/db");

const cekUser = async (username, email, whatsapp) => {
  const selectQuery = `SELECT * FROM teachers WHERE username = ? OR email = ? OR whatsapp = ?`;

  // Eksekusi query untuk mengambil data pengguna berdasarkan ID
  const [rows] = await dbPool.execute(selectQuery, [username, email, whatsapp]);

  // Mengembalikan data pengguna jika ditemukan
  return rows.length > 0 ? rows[0] : null;
};

module.exports = cekUser;
