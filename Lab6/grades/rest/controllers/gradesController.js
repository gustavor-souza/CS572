const Grade = require('../models/Grade');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


const grades = [new Grade(1, "Gustavo", "MWA", 97)];

// get /api/grades/
router.get('/',(req,res) => {
  res.json(grades);
});

// post /api/grades/
router.post('/',(req,res) => {
  const {id, name, course, grade } = req.body;
  grades.push(new Grade(id, name, course, grade));
  res.json(grades);
});

// put /api/grades/
router.put('/',(req,res) => {
  const {id, name, course, grade } = req.body;
  for (g in grades) {
    if(grades[g].getId() === id){
      grades[g] = new Grade(id, name, course, grade);
    }
  }
  res.json(grades);
});

// delete /api/grades/
router.delete('/',(req,res) => {
  const {id} = req.body;
  for (g in grades) {
    if(grades[g].getId() === id){
      delete grades[g];
    }
  }
  res.json(grades);
});

module.exports = router;