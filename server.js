const express = require('express'); 
const routes =  require('./routes/recipesRoutes'); 
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4001
const path = require('path');


app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {
    console.log(` Showing on ${port}`);
  });

  app.get('/', function(req, res) {
      res.status(200).json({message: 'Route is working'})
  })
  
  app.use('/api/recipelandia', routes);
module.exports = app; 