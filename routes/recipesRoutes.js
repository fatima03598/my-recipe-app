const express = require('express');
const router = express.Router();
const queries = require('../db/queries');


router.get('/recipes', (req, res, next) => {
    queries.getAll()
    .then((recipe) => {
        res.status(200).json(recipe);
    })
    .catch(err => next(err))
});

router.get('/recipes/')









module.exports = router;
