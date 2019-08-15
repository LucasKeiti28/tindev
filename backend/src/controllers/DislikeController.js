const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    // console.log(req.params.devId);
    // console.log(req.headers.usuario);

    const { usuario } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(usuario);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: "User not exist" });
    }

    loggedDev.dislikes.push(targetDev._id);
    await loggedDev.save();

    return res.json(loggedDev);
  }
};
