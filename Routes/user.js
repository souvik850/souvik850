const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../model/user');

router.post('/', (req, res, next) => {
  const User_1 = new User({
    user_id: mongoose.Types.ObjectId,
    uname: req.body.uname,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
  });

  User_1.save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
