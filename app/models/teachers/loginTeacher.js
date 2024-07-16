const dbPool = require("../../config/db");
const jwt = require("jsonwebtoken");

const loginTeacher = async (username, password) => {
  try {
    const query = `SELECT id, username, role FROM teachers WHERE username=? AND password=?`;

    const [teacher] = await dbPool.execute(query, [username, password]);
    const token = jwt.sign(teacher[0], process.env.TEACHER_KEY, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = loginTeacher;
