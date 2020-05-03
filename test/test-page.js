var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://simpleweb-env.eba-kxpjg2sn.us-east-2.elasticbeanstalk.com' , function(error, response, body) {
        expect(body).to.equal('ola mundo');
        done();
    });
});
