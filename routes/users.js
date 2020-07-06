var express = require('express');
var router = express.Router();
const db = require("../model/helper");

function getUsers(req, res) {
  db("SELECT * FROM users ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
}


router.get("/", function(req, res, next) {
  getUsers(req, res);
});

//localhost:5000/users/cereal/
router.get("/cereal", function(req, res, next) {
  db("SELECT * FROM cereal;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//ANITA
//localhost:5000/users/gender/
router.get("/gender", function(req, res, next) {
  db("SELECT * FROM gender;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


//select users who love a certain cereal  - localhost:5000/users/cereal/1
router.get("/cereal/:cereal_id", function(req, res, next) {
  if (!Number.isInteger(parseInt(req.params.cereal_id))) {
    res.status(400).send("Id is a number");
  }
    db(`SELECT * FROM users WHERE cereal_id=${req.params.cereal_id};`)
    .then(results => {
      if (results.error) {
        res.status(404).send(results.error);
      } else {
        res.send(results.data);
      }
    })
    .catch(err => res.status(500).send(err));
});


//ANITA - select users with certain gender  - localhost:5000/users/gender/1
router.get("/gender/:gender_id", function(req, res, next) {
  if (!Number.isInteger(parseInt(req.params.gender_id))) {
    res.status(400).send("Id is a number");
  }
    db(`SELECT * FROM users WHERE gender_id=${req.params.gender_id};`)
    .then(results => {
      if (results.error) {
        res.status(404).send(results.error);
      } else {
        res.send(results.data);
      }
    })
    .catch(err => res.status(500).send(err));
});



//if I click 2 cereals, it will get users for both  - localhost:5000/users/2, 1/
//localhost:5000/users/2/2  (cereal id / gender id)
router.get("/:ids/:gender_id", function(req, res, next) {
  db(`SELECT * FROM users WHERE cereal_id IN (${req.params.ids}) AND gender_id IN (${req.params.gender_id});`)
  .then(results => {
    if (results.error) {
      res.status(404).send(results.error);
    } else {
      res.send(results.data);
    }
  })
  .catch(err => res.status(500).send(err));
});



//just to change pic
router.put("/:id", (req, res) => {
  db(`UPDATE users SET photo ='${req.body.photo}' WHERE id=${req.params.id};`)
    .then(results => {
      if (results.error) {
        res.status(404).send({ error: results.error });
      } else {
        db("SELECT * FROM users ORDER BY id ASC;")
          .then(results => {
            res.send(results.data);
          })
          .catch(err => res.status(500).send(err));
      }
    })
    .catch(err => res.status(500).send(err));
});

//just for us
router.put("/:cereal_id", (req, res) => {
  db(`UPDATE users SET cereal_id ='${req.body.photo}' WHERE id=${req.params.id};`)
  .then(result => {
    if(result.error) {
      res.status(404).send({error: result.error});
    } else {
      db("SELECT * FROM users ORDER BY id ASC;")
      .then(result => {
        res.send(result.data);
      })
      .catch(err => res.status(500).send(err));
  }
}) 
  .catch(err => res.status(500).send(err));
});


//ANITA - added gender
router.post("/", function(req, res) {
  db(`INSERT INTO users (name, cereal_id, city, photo, dob, gender_id) VALUES ('${req.body.name}', ${req.body.cereal_id}, '${req.body.city}', '${req.body.photo}','${req.body.dob}', '${req.body.gender_id}');`)
    .then(result => {
      if(result.error) {
        res.status(404).send({error: result.error});
      } else {
        getUsers(req, res)
      }
    })
    .catch(err => res.status(500).send(err));
});



router.delete("/:id", function(req, res) {
  if (!Number.isInteger(parseInt(req.params.id))) {
    res.status(400).send("Id is a number");
  }
  db(`DELETE FROM users WHERE id=${req.params.id}`)
    .then(results => {
      if (results.error) {
        return res.status(404).send({ error: results.error });
      } else {
        getUsers(req, res);
      }
    })
    .catch(err => res.status(500).send(err));
  //your code here
});

module.exports = router;
