const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all feedback
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback";';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting feedback', error);
    res.sendStatus(500);
  });
});

// Adds a new feedback to the list of prime feedback
// Request body must be a feedback object with the feedbacks
router.post('/',  (req, res) => {
  console.log('feedback send to db', req.body);
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  let newFeedback = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
  pool.query(queryText, newFeedback)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});

module.exports = router;