const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

const routes = express.Router();

// How is a method get, we can access the route through browser.
// routes.get("/", (req, res) => {
//   const name = req.query.name;

//   return res.json({ message: `Hello, ${name}` });
// });

// When we need create a info in the application, we use method post.
// In Post method we usually use JSON and to use JSON we need tell to express server.
// routes.post("/devs", (req, res) => {

//   // Return the output in json format inside the Insomnia.
//   return res.json(req.body);

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

module.exports = routes;
