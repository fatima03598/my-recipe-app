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

router.get('/recipes/:id', (req, res, next) => {
    queries.getSingle(req.params.id)
    .then((recipe) => {
        res.status(200).json(recipe);
    })
    .catch(err => next(err))
});

router.post('/recipes', (req, res, next) => {
    queries.add(req.body)
    .then((recipesID) => {
      return queries.getSingle(recipesID);
    })
    .then((recipe) => {
        res.json(recipe);
    })
    .catch(err => next(err))
});



router.put('/recipes/:id', (req, res, next) => {
    if(req.body.hasOwnProperty('id')) {
        return res.status(422).json({
            error: 'Id cannot be updated'
            
        });
    }
    queries.update(req.params.id, req.body)
    .then( () => {
        return queries.getSingle(req.params.id);
    })
    .then((recipe) => {
        res.status(200).json(recipe);
    })
    .catch(err => next(err))
});

router.delete('/recipes/:id', (req, res, next) => {
    queries.getSingle(req.params.id)
    .then((recipe) => {
        queries.deleteItem(req.params.id)
        .then(() => res.status(200).json(recipe))
        .catch(err => next(err))
    })
    .catch(err =>next(err))
    
})




module.exports = router;
