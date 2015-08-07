var chai = require('chai');
var chaiHttp = require('chai-http');

var app = require('./index.js');

var should = chai.should();

chai.use(chaiHttp);

describe('Prices endpoint', function() {
    it('should have all prices to the correct order of ten', function() {
        chai.request(app)
            .get('/prices')
            .end(function(err, res) {
                (err === null).should.be.true;
                res.should.have.status(200);
                res.should.be.json;

                var orders = {
                    iPod: 1,
                    iPad: 2,
                    MacBook: 3
                };


                for (var product in res.body) {
                    var price = res.body[product];
                    var order = Math.log(price) / Math.log(10);
                    order = Math.floor(order);

                    order.should.equal(orders[product]);
                };
            });
    });
});
