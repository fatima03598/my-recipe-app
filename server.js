const express = require('express'); 
const routes =  require('./routes/recipesRoutes'); 
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4001

app.use('/api/recipelandia', routes);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(` Showing on ${port}`);
  });

  app.get('/', function(req, res) {
      res.status(200).json({message: 'Route is working'})
  })
  

module.exports = app; 