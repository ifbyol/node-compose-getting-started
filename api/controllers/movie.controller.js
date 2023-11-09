const db = require("../models");
const Op = db.Sequelize.Op;
const appConfig = require("../config/app.config.js");

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Title can not be empty!",
    });
    return;
  }

  const movie = {
    title: req.body.title,
    description: req.body.description,
  };

  db.movies.create(movie)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unexpected error",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  db.movies.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unexpected error.",
      });
    });
};

exports.getUsername = (req, res) => {
  res.send({username: appConfig.USERNAME})
};
