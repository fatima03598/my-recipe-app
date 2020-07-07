const express = require('express');
const router = express.Router();
const multer = require('multer');
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


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'react-recipe-app/public/uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        // cb(null,  req.body.id+'-'+file.fieldname + '-' +file.originalname);
        cb(null, 'recipe-image'+file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post('/upload', upload.single('image'), (req, res, next) => {
   
  try {
      const path = 'uploads/recipe-image'+req.file.originalname
      req.body.imageURL = path
      console.log(req.body)
      return res.status(201).json({
          message: 'File uploded successfully'
      });
     
  } catch (error) {
      console.error(error);
  }
})


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
