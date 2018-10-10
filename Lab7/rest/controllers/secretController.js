// secret controller routes
const express = require('express');
const Mg = require('../models/Seecret');
const crypto = require('crypto');

const router = express.Router();

const algorithm = 'aes256';
const password = 'asaadsaad';

const msg = new Mg({message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"});

Mg.count({}, function( err, count){
  if(count < 1) msg.save();
})

// get /api/secret/
router.get('/',(req,res) => {

  const encrypted = Mg.findOne({  message: { $exists: true}}, function (err, encryptedMessage) {
    if (err) return handleError(err);
    const myKey = crypto.createDecipher(algorithm, password);
    let result = myKey.update(encryptedMessage.message, 'hex', 'utf8');
    result += myKey.final('utf8');
    res.status(200).json(result);
  });
});