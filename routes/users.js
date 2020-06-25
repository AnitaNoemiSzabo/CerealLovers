var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// function getItems(req, res) {
//   db("SELECT * FROM winelist ORDER BY id ASC;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// }

router.get("/", function(req, res, next) {
  db("SELECT * FROM users;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/:id", function(req, res, next) {
  if (!Number.isInteger(parseInt(req.params.id))) {
    res.status(400).send("Id is a number");
  }
    db(`SELECT * FROM users WHERE id=${req.params.id};`)
    .then(results => {
      if (results.error) {
        res.status(404).send(results.error);
      } else {
        res.send(results.data);
      }
    })
    .catch(err => res.status(500).send(err));
});
module.exports = router;
