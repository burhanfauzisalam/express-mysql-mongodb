const dbPool = require("../../config/db");

const cekAdmin = async (username, email, whatsapp) => {
  const query = `SELECT *
                  FROM admin
                  WHERE username=? OR email=? OR whatsapp=?`;
  const data = await dbPool.execute(query, [username, email, whatsapp]);
  return data;
};

module.exports = cekAdmin;
