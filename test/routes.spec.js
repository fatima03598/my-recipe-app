process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const knex = require('../db/knex');

const  should  = chai.should();

chai.use(chaiHttp);

describe('API Routes', () => {
  beforeEach( (done) => {
      knex.migrate.rollback()
      .then(() => {
          knex.migrate.latest()
          .then(() => {
              return knex.seed.run()
              .then(() => {
                  done();
              });
          });
      });
  });

  afterEach((done) => {
      knex.migrate.rollback()
      .then(() => done())
  });

  describe('GET /api/recipelandia/recipes', () => {
      it('should return all shows', (done) => {
          chai.request(server)
          .get('/api/recipelandia/recipes')
          .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body.length.should.equal(2);
              res.body[0].should.have.property('title');
              res.body[0].should.have.property('ingridients');
              res.body[0].should.have.property('difficulty');
              res.body[0].should.have.property('minutes');
              res.body[0].should.have.property('serving');
              res.body[0].should.have.property('imageURL');
              res.body[0].should.have.property('method');
              done();
          })
      })
  });

  describe('GET /api/recipelandia/recipes/:id', () => {
    it('should return a show from id', (done) => {
        chai.request(server)
        .get('/api/recipelandia/recipes/1')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.title.should.equal('Chocolate Cake');
            res.body.should.have.property('ingridients');
            res.body.ingridients.should.equal('3/4 cups butter or margarine, softened; 3 eggs;  2 cups sugar;  2 cups flour; 3/4 cup unsweetened cocoa powder; 1 teaspoon baking soda; 3/4 teaspoon baking powder; 2 teaspoon vanilla; 1 1/2 cup milk');
            res.body.should.have.property('difficulty');
            res.body.difficulty.should.equal('easy');
            res.body.should.have.property('minutes');
            res.body.minutes.should.equal(50);
            res.body.should.have.property('serving');
            res.body.serving.should.equal(12);
            res.body.should.have.property('imageURL');
            res.body.imageURL.should.equal('https://images.unsplash.com/photo-1582577829927-897c60e62d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
            res.body.should.have.property('method');
            res.body.method.should.equal('Pre-heat oven to 350 degrees. Grease and flour three 6" X 1 1/2" round cake pans. Mix together flour, cocoa powder, baking powder and baking soda. Set aside. In a large bowl, beat butter, eggs and vanilla. Gradually add sugar. Beat on medium to high speed for about 3-4 minutes until well mixed. Alternately combine in flour mixture and milk to batter while beating. Continue to beat until batter is smooth. Pour equal amounts of batter into greased and floured round cake pans. Bake 30 to 35 minutes. Check with a toothpick to se if it is done. Bake a few minutes more, if needed. Remove from oven and allow cakes to cool in pans for a few minutes. Place cakes on a wire rack, to them allow to completely cool.');
            done();
            })
        })
    });
    describe('POST /api/recipelandia/recipes', () => {
        it('should post a recipe', (done) => {
            chai.request(server)
            .post('/api/recipelandia/recipes')
            .send({
                title: 'liquore',
                ingridients: 'liquorice',
                difficulty: 'hard',
                minutes:45,
                serving: 4,
                imageURL:'google.com',
                method:'eat it'
            })
            .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.title.should.equal('liquore');
            res.body.should.have.property('ingridients');
            res.body.ingridients.should.equal('liquorice');
            res.body.should.have.property('difficulty');
            res.body.difficulty.should.equal('hard');
            res.body.should.have.property('minutes');
            res.body.minutes.should.equal(45);
            res.body.should.have.property('serving');
            res.body.serving.should.equal(4);
            res.body.should.have.property('imageURL');
            res.body.imageURL.should.equal('google.com');
            res.body.should.have.property('method');
            res.body.method.should.equal('eat it')
            done()
            console.log(err)
            })
        })
    });

    describe('PUT /api/recipelandia/recipes', () => {
        it('update recipe', (done) => {
            chai.request(server)
            .put('/api/recipelandia/recipes/1')
            .send({
                title: 'liquore'
            })
            .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.title.should.equal('liquore');
            res.body.should.have.property('ingridients');
            res.body.should.have.property('difficulty');
            res.body.should.have.property('minutes');
            res.body.should.have.property('serving');
            res.body.should.have.property('imageURL');
            res.body.should.have.property('method');
            done()
            })
        })
        it('should NOT update a show if the id is part of request', (done)  => {
            chai.request(server)
            .put('/api/recipelandia/recipes/1')
            .send({
                id:5,
                title: 'liquore'
            })
            .end(function(err, res) {
              res.should.have.status(422);
              res.should.be.json; // jshint ignore:line
              res.body.should.be.a('object');
              res.body.should.have.property('error');
              res.body.error.should.equal('Id cannot be updated');
              done();
            });
          });
    });

    

   

});