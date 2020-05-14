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
      .catch( err => console.log(err));
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
  })

});