const { default: axios } = require("axios");
const sebModel = require("../../models/seb");

const deleteSeb = async (req, res) => {
  try {
    const { filename, url } = req.body;

    const formData = new URLSearchParams();
    formData.append("filename", url);

    const deleteFile = await axios.post(
      `https://seb.nola.sch.id/delete.php`,
      formData,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    if (deleteFile.status !== 200) {
      return res.status(400).json({ error: "Failed to delete." });
    }
    const file = await sebModel.findOneAndDelete({ filename });
    if (!file) {
      return res.status(400).json({ error: "File dosen't exist." });
    }
    res
      .status(200)
      .json({ status: deleteFile.status, message: "File deleted." });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = deleteSeb;
